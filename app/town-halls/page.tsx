import InputChart from "@/components/InputChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeftIcon, FileTextIcon, ImageIcon, PersonIcon, VideoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function InputExplanation() {
  return (
    <div className="w-full space-y-8">
      <div>
        <Link href={"/"}>
          <Button variant={"link"} className="p-0 m-0 flex items-center gap-2">
            <ChevronLeftIcon />
            Return
          </Button>
        </Link>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-2 text-primary w-fit">
          Town Halls
        </h1>
      </div>
      <div className="flex flex-col gap-2">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-4'>
            <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Thank You for Participating!</h2>
            <p>Thank you for all your input both synchronously at our four town hall meetings and asynchronously through our submission form. Here is <Link className='text-primary font-semibold hover:underline' href={'/how-we-will-use-your-input'}>how we will use your input.</Link> We are currently processing the data and hope to have some synthesis to share soon. Throughout April, we held several Synthesis Meetings with funding agencies, NGOs, and industry representatives to identify possible priority research areas and next steps.</p>
<div className=''>
<Card className='w-full '>
            <CardHeader className='pb-2'>
              <CardTitle className='flex gap-2 items-center scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'><FileTextIcon className='h-6 w-6' /> Town Hall Resources</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col w-full gap-2 text-md'>
            <div className='flex flex-wrap w-full gap-8 items-start h-fit pt-4'>

<div className='flex flex-col'>
<div className='scroll-m-20 w-fit mb-1 text-primary font-[600] text-md'>Recordings</div>
  <div className='flex gap-4'>
    <Link target='_blank' href="https://knowinnovation.zoom.us/rec/play/zKaJIwfEssosyM4HFNay-t9alqs97hvZCN7baERc3LK9dB_1UsJ2dSHwa-iGgrKKky4J0KKl6qBZ0Vvd.0ubUi8osZ4JRaMtP?pwd=NtYH6ZpwGqbYvWjXNDXuEjZDSsc9WmqV">
      <Button variant={'outline'} className='flex items-center text-xs h-8 gap-2 font-semibold text-primary hover:text-primary'>
      <VideoIcon />
        Town Hall Recording
      </Button>
    </Link>
  </div>
</div>

<div className='flex flex-col'>
<div className='scroll-m-20 w-fit mb-1 text-primary font-[600] text-md'>Documents</div>
<div className='flex gap-2'>
  <Link target='_blank' href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Town%20Hall%20Slides.pdf?alt=media&token=4d83d8ce-61b2-4189-acb7-145d6f5d8fe1">
    <Button variant={'outline'} className='flex text-xs items-center h-8 gap-2 font-semibold text-primary hover:text-primary'>
    <ImageIcon />
      Slide Deck
    </Button>
  </Link>
</div>
</div>

<div className='flex flex-col'>
  <div className='scroll-m-20 w-fit mb-1 text-primary font-[600] text-md'>Participants</div>
  <div className='flex flex-wrap gap-4'>
    <Link target='_blank' href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Town%20Hall%201%20Participants.pdf?alt=media&token=b34ea209-9f21-448c-a814-f58398e0b97c">
      <Button variant={'outline'} className='flex text-xs items-center h-8 gap-2 font-semibold text-primary hover:text-primary'>
      <PersonIcon />
        Town Hall 1 Participants
      </Button>
    </Link>

    <Link target='_blank' href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Town%20Hall%202%20Participants.pdf?alt=media&token=06896f75-b898-4d34-8f6c-78f730f889bb">
      <Button variant={'outline'} className='flex text-xs items-center h-8 gap-2 font-semibold text-primary hover:text-primary'>
      <PersonIcon />
        Town Hall 2 Participants
      </Button>
    </Link>

    <Link target='_blank' href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Town%20Hall%203%20Participants.pdf?alt=media&token=e1f4e7e2-d47e-4c9d-aa6f-6913f14e2181">
      <Button variant={'outline'} className='flex text-xs items-center h-8 gap-2 font-semibold text-primary hover:text-primary'>
      <PersonIcon />
        Town Hall 3 Participants
      </Button>
    </Link>

    <Link target='_blank' href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Town%20Hall%204%20Participants.pdf?alt=media&token=de38805f-704d-4d08-98c5-0234e6859432">
      <Button variant={'outline'} className='flex text-xs items-center h-8 gap-2 font-semibold text-primary hover:text-primary'>
      <PersonIcon />
        Town Hall 4 Participants
      </Button>
    </Link>
  </div>
</div>


</div> 
            </CardContent>
            <CardFooter className='flex flex-col w-full items-start gap-2 justify-start'>

         
              
            </CardFooter>
          </Card>
{/* <Link target='_blank' href="https://forms.gle/vpP5HgMrYBwCnSXJA">
                  <Button className='flex items-center h-8 gap-2 font-semibold'>
                  <Link2Icon />
                    Share your ideas
                  </Button>
                </Link> */}
               
                </div>
                <p className=''></p>
                </div>
                <InputChart />
          </div>
      </div>
    </div>
  );
}
