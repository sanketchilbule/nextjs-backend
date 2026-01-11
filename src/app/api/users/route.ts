import { NextResponse } from "next/server"


export async function GET(req,res){
    return NextResponse.json({name:"sanke", age:25, email:"sanke@gmail.com"})
}