'use client'
import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BiUser } from 'react-icons/bi';
import AppleLoginIcon from '@/app/assets/icons/_components/AppleLoginIcon';

import GoogleIcon from '@/app/assets/icons/_components/GoogleIcon';
import Link from 'next/link';
import CustomDivider from '@/components/common/Divider';
import InputPassword from '@/components/common/InputPassword';
import { useLogin } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})
const LoginPage = () => {
  const router = useRouter()
  const { mutate: login, isPending, error } = useLogin();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleFormSubmission = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    login(data, {
      onSuccess: (data) => {
        console.log('Login success:', data);
        toast.success('Login successful!', {
          toastId: 'login-success',
        });
        // router.push('/login')
      },
      onError: (err: any) => {
        console.error('Login failed:', err);
        toast.error(err.response.data.message, {
          toastId: 'login-failed',
        });
      },
    });

  }
  return (
    <div className='auth-page sm:py-7 sm:px-9'>
      <h4 className="title font-medium sm:font-semibold text-[26px] sm:text-[28px] mb-8 text-center">
        Log in to citehub
      </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmission)} className="space-y-8 mb-8">
          <div className="grid grid-cols-1 gap-5">
            {/* Enter User Name or Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <div className='relative'>
                    <FormControl>
                      <Input type='text' {...field} placeholder="User Name or Email" className='ps-10' />
                    </FormControl>
                    <BiUser className='absolute top-0 bottom-0 my-auto start-3 text-[#808080] text-lg' />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className='col-span-2 mb-3'>
                  <FormControl>
                    <InputPassword field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='col-span-2'>
              <Button type="submit" size={'lg'} className='btn-primary w-full h-[40] sm:h-[52]'>Continue</Button>
            </div>
            <div className='col-span-2 my-4'>
              <CustomDivider text="or" />
            </div>
            {/* continue with google */}
            <FormItem className='col-span-2 mb-4'>
              <FormControl>
                <Button type='button' variant={"outline"}
                  className='h-[40] sm:h-[52] ps-0 sm:ps-[1] text-md sm:text-lg bg-[#5383EC] text-white border-[#5383EC] hover:text-[#5383EC]'
                ><span className='d-block h-[38] sm:h-[48]'><GoogleIcon /></span> <span className='block w-full'>Continue With Google</span></Button>
              </FormControl>
              <FormMessage />
            </FormItem>
            {/* continue with apple */}
            <FormItem className='col-span-2 mb-4'>
              <FormControl>
                <Button type='button' variant={"outline"} className='h-[40] sm:h-[52] text-md sm:text-lg'><AppleLoginIcon /> Continue With Apple</Button>
              </FormControl>
              <FormMessage />
            </FormItem>
            <div className='col-span-2 my-4'>
              <CustomDivider text="Don't have an citehub.net account?" />
            </div>
          </div>

        </form>
        <Link className='d-block w-full' href={'/signup'}><Button variant={'outline'} className='btn-outline w-full'>Sign Up</Button></Link>
      </Form>
    </div>

  )
}

export default LoginPage