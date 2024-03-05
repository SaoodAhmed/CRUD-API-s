import { NextResponse } from "next/server"
import * as fs from "fs"

export const GET = async ()=>{
    let data = await fs.promises.readFile('./src/app/navJson/index.json',"utf-8") // still in json format
    data = await JSON.parse(data)
    return NextResponse.json({data}) // parse used to convert in javascript object
    
}