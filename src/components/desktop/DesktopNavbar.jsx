import { desktopNavItems } from '../../constants/constant'

const DesktopNavbar = () => {
  return (
    <div className='w-40 flex flex-col items-center h-screen bg-[#FFF] mr-4 sticky top-0'>
        {
            desktopNavItems.map((item,idx)=>{
                return (
                    <div key={idx} className='w-24 hover:cursor-pointer flex flex-col h-20 items-center text-center justify-center gap-[6px] p-2'>
                            <p>{item.icon}</p>
                            <p className='text-[#1C4980]'>{item.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DesktopNavbar