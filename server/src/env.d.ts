declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PORT?: string;
      BASE_URL: string;
      REDIS_URL?: string;
      MONGO_URI?:string
      // Add other environment variables here
    }
  }
  