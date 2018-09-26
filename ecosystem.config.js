module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: 'app',
      script: './server/server.js',
      cwd: './',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production',
        HOST: 'localhost',
        PORT: 8888
      },
      watch: true,
      ignore_watch: [
        'node_modules',
        'logs'
      ],
      exec_mode: 'cluster',
      instances: 4,
      max_memory_restart: 8,
      min_uptime: '60s',
      max_restarts: 30,
      restart_delay: 60000,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      output: './logs/app-out.log',
      error: './logs/app-err.log',
      merge_logs: true
    }
  ]
}
