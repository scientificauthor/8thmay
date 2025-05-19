import { BadRequestException, Inject, Injectable, Redirect } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from 'src/core/supabase/supabase.module';
import { SignupDto } from './dto/signup.dto/signup.dto';
import { LoginDto } from './dto/login.dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject(SUPABASE_CLIENT)
        private readonly supabase: SupabaseClient,
      ) {}
    
      async signup(dto: SignupDto) {
        const { data, error } = await this.supabase.auth.signUp({
          email: dto.email,
          password: dto.password,
          options: {
            data: {
              first_name: dto.firstName,
              last_name: dto.lastName,
              country:dto.country,
              tips:dto.tips,
              terms:dto.terms,
              
            },
          },
        });
        if (error) throw new BadRequestException(error.message);
    
        return data;
      }
    
      async login(dto: LoginDto) {
        const { data, error } = await this.supabase.auth.signInWithPassword({
          email: dto.email,
          password: dto.password,
        });
    
        if (error) throw new BadRequestException(error.message);
    
        return data;
      }

      async socialLogin(provider:any) {
        const { data, error } = await this.supabase.auth.signInWithOAuth({
          provider: provider,
          options: {
            redirectTo: 'http://localhost:8010/home',
          },
        });
        if (error) throw new BadRequestException(error.message);
    
        return data;
      }

      async getUserSession(tokens) {
        await this.supabase.auth.setSession({
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
        });
        const { data, error } = await this.supabase.auth.getSession();
        if (error) throw new BadRequestException(error.message);
    
        return data;
      }
}
