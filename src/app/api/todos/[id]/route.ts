import { NextRequest, NextResponse } from "next/server";

// first parameter is fixed for NextRequest
// for dynamic route use 2nd parameter

let data = [
  { id: 1, name: "saud" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Hamzaa" },
];

export const GET = async (req: NextRequest,{ params }: { params: { id: string } }) => {

    try {
        
        const ress = await  data.find((item:any)=>Number(item.id) === Number(params.id))
        if(ress){
            return NextResponse.json({response:ress})

        }else{
            return NextResponse.json({message:"Not exists"})
        }
        
    } catch (error) {
        console.log(error)
        
    }


};
