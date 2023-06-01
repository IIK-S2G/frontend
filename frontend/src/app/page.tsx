import Image from 'next/image'
import en from "../text/mainScreen/en.json"
import Link from 'next/link'

const Home = (): JSX.Element => {
    return (
        <main className="grid place-items-center h-[92vh]">
            <Image width={500} height={200} src="/images/logo/s2g_logo_white.png" alt="Logo"/>
            <h1 className='text-2xl place-items-center font-bold'>{en.rulesTitle}</h1>
            <div className='w-[50vw] mt-2'>
                {en.rules.map((rule) => (
                 <div className='flex'>
                    <p className='w-[5vw]' key={rule.id}>{rule.id+1 + ". "}</p>
                    <p className='w-[95vw]' key={rule.id}>{rule.rule}</p>
                 </div>   
                ))}
            </div>
            <div className='grid place-items-center mt-10'>
                <h1 className='text-2xl font-bold mt-100'>{en.helpTitle}</h1>
                <h2>{en.helpIngress}</h2>
                <div className='text-left w-full font-bold mt-5'>
                    <h3>{en.helpGjovik.title}</h3>
                </div>
                {en.helpGjovik.people.map((people) => (
                 <div className='flex justify-between w-full'>
                    <p key={people.name}>{people.name}</p>
                    <p className='text-blue-500' key={people.mail}><Link key={people.name} href={`mailto:${people.mail}`}>{people.mail}</Link></p>
                 </div>
                ))}
                <div className='text-left w-full font-bold mt-5'>
                    <h3>{en.helpTrondheim.title}</h3>
                </div>
                {en.helpTrondheim.people.map((people) => (
                 <div className='flex justify-between w-full'>
                    <p key={people.name}>{people.name}</p>
                    <p className='text-blue-500' key={people.mail}><Link key={people.name} href={`mailto:${people.mail}`}>{people.mail}</Link></p>
                 </div>
                ))}
            </div>
        </main>
      )
}

export default Home