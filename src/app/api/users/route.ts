import { NextResponse } from "next/server"


export async function GET(){
    return NextResponse.json({name:"sanke", age:25, email:"sanke@gmail.com"})
}