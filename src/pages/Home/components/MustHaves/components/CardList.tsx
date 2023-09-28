import Card from './Card'

export default function CardList() {
  return (
    <div className='flex flex-col lg:flex-row gap-[20px] justify-between w-[100%]'>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
} 
