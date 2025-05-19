'use client'

import { Button } from "@/components/ui/button"
import { useSession } from "@/hooks/useAuth";
import { useEffect } from "react";

export default function Home() {
    const { mutate: session, isPending, error } = useSession();
    console.log(session, isPending, error);
    useEffect(() => {
        const fragment = window.location.hash.substring(1);
        const params = new URLSearchParams(fragment);
    
        const access_token = params.get('access_token');
        const refresh_token = params.get('refresh_token')
        console.log('Access Token:', access_token);
        console.log('Refresh Token:', refresh_token);
        session({access_token:access_token, refresh_token:refresh_token}, {
            onSuccess: (data:any) => {
                console.log('Session success:', data);
            }
        })  
    },[])

    return (
        <div>
            <p>Hello World</p>
            <Button variant="destructive">Destructive</Button>
        </div>
    )
}
