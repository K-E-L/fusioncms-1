<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services\Logs;

use File;
use ReflectionClass;
use Psr\Log\LogLevel;

class LogRepository
{
    /**
     * @var string
     */
    private $file;

    /**
     * @var int
     */
    protected $maxFileSize = 52428800;

    /**
     * Get all logs.
     *
     * @return array
     */
    public function getAll()
    {
        $log       = [];
        $logLevels = $this->getLogLevels();

        $pattern   = '/(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\].*?\} \n)/s';

        if (! $this->file) {
            $logFile = $this->getFiles();

            if (! count($logFile)) {
                return [];
            }

            $this->file = $logFile[0];
        }

        if (File::size($this->file) > $this->maxFileSize) {
            $log[] = [
                'level'  => [
                    'name'   => 'Error',
                    'slug'   => 'error',
                    'icon'   => 'exclamation-triangle',
                    'status' => 'warning'],
                'date'   => '',
                'text'   => "Unable to display error log: log file at {$this->file} exceeds maximum size of {$this->maxFileSize} bytes",
                'inFile' => null
            ];
            return $log;
        }

        $file = File::get($this->file);

        preg_match_all($pattern, $file, $headings);

        if (! is_array($headings)) {
            return $log;
        }

        $logData = preg_split($pattern, $file);

        if ($logData[0] < 1) {
            array_shift($logData);
        }
        foreach ($headings[0] as $heading) {
            //  /(\{"exception.*?\} \n)/s
            // preg_match('/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\].*?\.' . $levelKey . ': (.*?)( in .*?:[0-9]+)?$/', $heading, $current);
            $timestampPattern = '^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\]';
            $logLevelPattern = '(^' . implode('|', array_keys($logLevels)) . '$): ';
            $textPattern = '(.*?)\{';
            $filePattern = '.*?(at .*?)';
            $stackTracePattern = '\[stacktrace\]\n(.*?)"\} ';


            $regexPattern = '/' . $timestampPattern . '.*?\.' . $logLevelPattern .  $textPattern .  $filePattern . $stackTracePattern . '/s';
            preg_match($regexPattern, $heading, $current);

            if (! isset($current[2])) {
                continue;
            }

            $log[] = [
                'level'      => $current[2],
                'date'       => $current[1],
                'text'       => $current[3],
                'inFile'     => isset($current[4]) ? $current[4] : null,
                'stackTrace' => $current[5] ?? null
            ];
        }

        return array_reverse($log);
    }

    /**
     * Get log files from storage.
     *
     * @param  bool  $basename
     * @return array
     */
    public function getFiles($basename = false)
    {
        $files = glob(storage_path('/logs/*'));
        $files = array_reverse($files);

        if ($basename and is_array($files)) {
            foreach ($files as $key => $file) {
                $files[$key] = basename($file);
            }
        }

        return $files;
    }

    /**
     * Return the name of the given file path.
     *
     * @return string
     */
    public function getFileName()
    {
        return basename($this->file);
    }

    /**
     * Set the current file to be viewed.
     *
     * @param  string  $file
     * @return null
     */
    public function setFile($file)
    {
        if (File::exists(storage_path('logs/' . $file))) {
            $this->file = storage_path('logs/' . $file);
        }
    }

    /**
     * Get the defined log levels from the PSR Log class.
     *
     * @return array
     */
    public function getLogLevels()
    {
        $class     = new ReflectionClass(new LogLevel);
        $constants = $class->getConstants();
        $levels    = [];

        foreach ($constants as $key => $level) {
            switch ($key) {
                case 'EMERGENCY':
                    $icon   = 'bug';
                    $status = 'danger';
                    break;
                case 'ALERT':
                    $icon   = 'bullhorn';
                    $status = 'danger';
                    break;
                case 'CRITICAL':
                    $icon   = 'heartbeat';
                    $status = 'danger';
                    break;
                case 'ERROR':
                    $icon   = 'times-circle';
                    $status = 'danger';
                    break;
                case 'WARNING':
                    $icon   = 'exclamation-triangle';
                    $status = 'warning';
                    break;
                case 'NOTICE':
                    $icon   = 'exclamation-circle';
                    $status = 'warning';
                    break;
                case 'INFO':
                    $icon   = 'info-circle';
                    $status = 'info';
                    break;
                case 'DEBUG':
                    $icon   = 'life-ring';
                    $status = 'info';
                    break;
            }

            $levels[$key] = [
                'name'   => ucfirst($level),
                'slug'   => $level,
                'icon'   => $icon,
                'status' => $status,
            ];
        }

        return $levels;
    }
}
