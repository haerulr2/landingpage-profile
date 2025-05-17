import localFont from 'next/font/local'

export const poppins = localFont({
  src: [
    {
      path: './fonts/poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/poppins/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
    },  
    {
      path: './fonts/poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const openSans = localFont({
  src: [
    {
      path: './fonts/open-sans/OpenSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/open-sans/OpenSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/open-sans/OpenSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/open-sans/OpenSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
}) 