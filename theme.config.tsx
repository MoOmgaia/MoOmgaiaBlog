/* eslint-disable import/no-anonymous-default-export */
import Image from 'next/image'
import BuyCoffee from "./public/images/BuyMeACoffee.png"

const buyMeACoffeeUrl = process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL

export default {
  logo: (
    <div className='flex gap-x-5 items-center justify-center'>
      <Image src='/logo.svg' alt='logo' width={40} height={40} className='h-fit' />
      <span
        className='text-base md:text-xl lg:text-2xl font-bold dark:text-white text-black
  '
      >
        Blog de Mô'Omgaïa
      </span>
    </div>
  ),

  project: {
    link: 'https://github.com/MoOmgaia/MoOmgaiaBlog',
  },
  editLink: {
    component: () => null,
  },
  feedback: {
    content: () => null,
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content="Blog about Mô'Omgaïa" />
      <meta property='og:description' content='Les coulisses de création du site...' />
    </>
  ),
  footer: {
    text: (
      <div className='w-full flex justify-between items-center'>
        <div>
          <p>
            This blog was built with{' '}
            <a href='https://nextra.site/' target='_blank' rel='noopener noreferrer' className='underline'>
              Nextra
            </a>{' '}
            and{' '}
            <a href='https://the-guild.dev/' target='_blank' rel='noopener noreferrer' className='underline'>
              The Guild
            </a>{' '}
            components.
          </p>
        </div>
        {buyMeACoffeeUrl ? (
          <a href={buyMeACoffeeUrl} target="_blank"><Image width={144} height={143} src={BuyCoffee} alt="Buy Me A Coffee" /></a>
        ) : null}
      </div>
    ),
  },
}
