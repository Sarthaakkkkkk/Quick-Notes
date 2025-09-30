"use client";

import { logOutAction } from '@/actions/users';
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useRouter } from "next/navigation";
import { useState } from 'react'
import toast from 'react-hot-toast';

function LogOutButton (){
    const [loading, setloading] = useState(false);
    const router = useRouter();

    const handleLogOut = async () => {
        setloading(true);

        const {errorMessage} = await logOutAction()

        if(!errorMessage) {
            toast.success('Logged out Successfully !');
            router.push("/");
        } else {
            toast.error(errorMessage);
        }

        setloading(false);
    }

    return (
        <Button 
        variant="outline"
        onClick={handleLogOut}
        disabled={loading}
        className="w-24"> 
            {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
        </Button>
    )
}

export default LogOutButton