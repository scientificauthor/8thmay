// core/supabase/supabase.module.ts
import { Module } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const SUPABASE_CLIENT = 'SUPABASE_CLIENT';

@Module({
    imports: [ConfigModule],
  providers: [
    {
      provide: SUPABASE_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const { url, serviceRoleKey } = config.get('supabase');
        return createClient(url, serviceRoleKey);
      },
    },
  ],
  exports: [SUPABASE_CLIENT],
})
export class SupabaseModule {}
