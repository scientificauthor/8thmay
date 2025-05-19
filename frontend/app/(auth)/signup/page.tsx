'use client'
import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BiLogoApple } from 'react-icons/bi';
import AppleLoginIcon from '@/app/assets/icons/_components/AppleLoginIcon';
import { Separator } from '@/components/ui/separator';
import GoogleIcon from '@/app/assets/icons/_components/GoogleIcon';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import InputPassword from '@/components/common/InputPassword';
import { CountryDropdown } from '@/components/common/countryCode';
import { useSignup, useSocialLogin } from '@/hooks/useAuth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First Name is required.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  country: z.string().min(2, {
    message: "Please select a country.",
  }),
  tips: z.boolean().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
}).required()
const SignupPage = () => {
  const router = useRouter()
  const { mutate: signup, isPending, error } = useSignup();
  const {mutate: socialLogin} = useSocialLogin();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
      tips: false,
      terms: false,
    },
  })
  const handleSocialLogin = (provider: string) => { 
    console.log(provider);
    socialLogin({
      provider: provider,
    }, {
      onSuccess: (data) => {
        console.log('Social login success:', data);
        if (data?.url) {
          window.location.href = data.url
        }
      },
      onError: (err:any) => {
        console.error('Social login failed:', err);
        toast.error(err.response.data.message,{
          toastId: 'social-login-failed',
        });
      },
    }); 
    
  }

  const handleFormSubmission = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    signup(data, {
      onSuccess: (data) => {
        console.log('Signup success:', data);
        toast.success('Signup successful!',{
          toastId: 'signup-success',
        });
        router.push('/login')
      },
      onError: (err:any) => {
        console.error('Signup failed:', err);
        toast.error(err.response.data.message,{
          toastId: 'signup-failed',
        });
      },
    });
  
  }
  return (
    <div className='auth-page'>
      <h4 className="title font-medium sm:font-semibold text-[26px] sm:text-[28px] mb-6 text-center">
        Sign up to learning reference managers
      </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmission)} className="space-y-8">
          <div className="grid grid-cols-2 gap-5">
            {/* continue with google */}
            <FormItem className='col-span-2 mb-4'>
              <FormControl>
                <Button onClick={()=>handleSocialLogin('google')} type='button' variant={"outline"}
                  className='h-[40] sm:h-[55] ps-0 sm:ps-[1] text-md sm:text-lg bg-[#5383EC] text-white border-[#5383EC] hover:text-[#5383EC]'
                ><span className='d-block h-[38] sm:h-[51]'><GoogleIcon /></span> <span className='block w-full'>Continue With Google</span></Button>
              </FormControl>
              <FormMessage />
            </FormItem>
            {/* continue with apple */}
            <FormItem className='col-span-2 mb-4'>
              <FormControl>
                <Button type='button' variant={"outline"} className='h-[40] sm:h-[55] text-md sm:text-lg'><AppleLoginIcon /> Continue With Apple</Button>
              </FormControl>
              <FormMessage />
            </FormItem>
            <div className='col-span-2 mb-4 relative'>
              <Separator className="" />
              <span className='text-secondary absolute start-0 end-0 m-auto w-fit top-[-12px] bg-white px-2'>or</span>
            </div>
            {/* Enter First name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className='col-span-2 sm:col-span-1'>
                  <FormControl>
                    <Input type='text' placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Enter last name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className='col-span-2 sm:col-span-1'>
                  <FormControl>
                    <Input {...field} type='text' placeholder="Last Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Enter email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormControl>
                    <Input type='email' {...field} placeholder="Email address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Enter password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormControl>
                    <InputPassword field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Select Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormControl>
                    <CountryDropdown onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tips"
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tips" checked={field.value}
                        onCheckedChange={field.onChange} />
                      <label
                        htmlFor="tips"
                        className='text-sm sm:text-[16px]'
                      >
                        Send me emails with tips on how to find talent that fits my needs.
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" checked={field.value}
                        onCheckedChange={field.onChange} />
                      <label
                        htmlFor="terms"
                        className='text-sm sm:text-[16px]'
                      >
                        Yes, I understand and agree to the citehub <Link className='text-[#108A00]' href={'/'}>Terms of Service</Link> , including the <Link className='text-[#108A00]' href={'/'}>User Agreement </Link> and <Link className='text-[#108A00]' href={'/'}>Privacy Policy.</Link>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" size={'lg'} className='btn-primary w-full h-[40] sm:h-[55]'>Create my account</Button>
        </form>
        <p className='text-center mt-9 text-sm font-medium'>Already have an account? <Link className='text-primary' href={'/login'}>Log In</Link></p>
      </Form>
    </div>

  )
}

export default SignupPage