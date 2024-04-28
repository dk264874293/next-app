export const revalidate = 10

export async function GET() {
    console.log('GET /api/time')
    return Response.json({ data: new Date().toLocaleTimeString() })
  }

// export async function POST(){
 
//     return Response.json({time: new Date().toLocaleTimeString()})
// }