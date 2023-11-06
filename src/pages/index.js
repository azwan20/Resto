import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='index'>
      <header>
                <nav class="navbar">
                    <div class="container-fluid">
                        <img src="/logo2.png" style={{width: '200px'}}></img>
                        <div class="side" style={{ width: '350px', justifyContent: "space-between", marginRight: '10px'}}>
                            <div class="notif2 d-flex" style={{width: '130px'}}>
                            <Link href="/">
                                <button class="d-flex" style={{margin: '10px'}}>
                                    <span class="material-symbols-outlined" style={{ paddingRight: '10px' }}>
                                        store
                                    </span> Pusat
                                </button>
                                </Link>
                            </div>
                            <div class="notif1 d-flex" style={{width: '160px'}}>
                                <Link href="/register">
                                <button class="d-flex">
                                    Login / Register
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
      <div>
        <div className='satu'>
          <h1>Hello There, Welcome!</h1>
          <p>You're Food Reservation</p>
          <Link href="/resto/index2"><button>Our Menu</button></Link>
          <Link href="#"><button>Category</button> </Link>
        </div>
        <div className='dua'>
          <h1>About Us</h1>
          <div className='d-flex'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                <path d="M29.5002 4.91667C18.6835 4.91667 9.8335 13.7667 9.8335 24.5833C9.8335 37.8583 27.0418 52.8542 27.7793 53.5917C28.271 53.8375 29.0085 54.0833 29.5002 54.0833C29.9918 54.0833 30.7293 53.8375 31.221 53.5917C31.9585 52.8542 49.1668 37.8583 49.1668 24.5833C49.1668 13.7667 40.3168 4.91667 29.5002 4.91667ZM29.5002 48.4292C24.3377 43.5125 14.7502 32.9417 14.7502 24.5833C14.7502 16.4708 21.3877 9.83333 29.5002 9.83333C37.6127 9.83333 44.2502 16.4708 44.2502 24.5833C44.2502 32.6958 34.6627 43.5125 29.5002 48.4292ZM29.5002 14.75C24.0918 14.75 19.6668 19.175 19.6668 24.5833C19.6668 29.9917 24.0918 34.4167 29.5002 34.4167C34.9085 34.4167 39.3335 29.9917 39.3335 24.5833C39.3335 19.175 34.9085 14.75 29.5002 14.75ZM29.5002 29.5C26.796 29.5 24.5835 27.2875 24.5835 24.5833C24.5835 21.8792 26.796 19.6667 29.5002 19.6667C32.2043 19.6667 34.4168 21.8792 34.4168 24.5833C34.4168 27.2875 32.2043 29.5 29.5002 29.5Z" fill="#29B362" />
              </svg>
              <p style={{ width: '200px' }}>Jl. Perintis Kemerdekaan, KM 9 No.10</p>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                <path d="M4.91683 17.2083V14.75C4.26484 14.75 3.63955 15.009 3.17853 15.47C2.7175 15.9311 2.4585 16.5563 2.4585 17.2083H4.91683ZM31.9585 17.2083H34.4168C34.4168 16.5563 34.1578 15.9311 33.6968 15.47C33.2358 15.009 32.6105 14.75 31.9585 14.75V17.2083ZM31.9585 22.125V19.6667C31.3065 19.6667 30.6812 19.9257 30.2202 20.3867C29.7592 20.8477 29.5002 21.473 29.5002 22.125H31.9585ZM4.91683 19.6667H31.9585V14.75H4.91683V19.6667ZM29.5002 17.2083V46.7083H34.4168V17.2083H29.5002ZM7.37516 41.7917V17.2083H2.4585V41.7917H7.37516ZM31.9585 24.5833H44.2502V19.6667H31.9585V24.5833ZM51.6252 31.9583V41.7917H56.5418V31.9583H51.6252ZM34.4168 46.7083V22.125H29.5002V46.7083H34.4168ZM45.9882 48.4464C45.5272 48.9072 44.902 49.1661 44.2502 49.1661C43.5983 49.1661 42.9731 48.9072 42.5121 48.4464L39.036 51.9225C40.4191 53.3051 42.2946 54.0818 44.2502 54.0818C46.2057 54.0818 48.0813 53.3051 49.4643 51.9225L45.9882 48.4464ZM42.5121 44.9703C42.9731 44.5094 43.5983 44.2505 44.2502 44.2505C44.902 44.2505 45.5272 44.5094 45.9882 44.9703L49.4643 41.4942C48.0813 40.1116 46.2057 39.3349 44.2502 39.3349C42.2946 39.3349 40.4191 40.1116 39.036 41.4942L42.5121 44.9703ZM16.4882 48.4464C16.0272 48.9072 15.402 49.1661 14.7502 49.1661C14.0983 49.1661 13.4731 48.9072 13.0121 48.4464L9.53604 51.9225C10.9191 53.3051 12.7946 54.0818 14.7502 54.0818C16.7057 54.0818 18.5813 53.3051 19.9643 51.9225L16.4882 48.4464ZM13.0121 44.9703C13.4731 44.5094 14.0983 44.2505 14.7502 44.2505C15.402 44.2505 16.0272 44.5094 16.4882 44.9703L19.9643 41.4942C18.5813 40.1116 16.7057 39.3349 14.7502 39.3349C12.7946 39.3349 10.9191 40.1116 9.53604 41.4942L13.0121 44.9703ZM45.9882 44.9703C46.47 45.4497 46.7085 46.0765 46.7085 46.7083H51.6252C51.6252 44.8252 50.9049 42.9323 49.4643 41.4942L45.9882 44.9703ZM46.7085 46.7083C46.7092 47.0313 46.646 47.3511 46.5223 47.6495C46.3987 47.9478 46.2172 48.2186 45.9882 48.4464L49.4643 51.9225C50.1498 51.2383 50.6936 50.4255 51.0644 49.5308C51.4352 48.636 51.6258 47.6769 51.6252 46.7083H46.7085ZM39.3335 44.25H31.9585V49.1667H39.3335V44.25ZM42.5121 48.4464C42.2832 48.2186 42.1016 47.9478 41.978 47.6495C41.8544 47.3511 41.7911 47.0313 41.7918 46.7083H36.8752C36.8752 48.5914 37.5955 50.4843 39.036 51.9225L42.5121 48.4464ZM41.7918 46.7083C41.7905 46.3853 41.8536 46.0653 41.9772 45.7669C42.1009 45.4685 42.2827 45.1977 42.5121 44.9703L39.036 41.4942C38.3505 42.1784 37.8067 42.9912 37.4359 43.8859C37.0651 44.7807 36.8746 45.7398 36.8752 46.7083H41.7918ZM13.0121 48.4464C12.7832 48.2186 12.6016 47.9478 12.478 47.6495C12.3544 47.3511 12.2911 47.0313 12.2918 46.7083H7.37516C7.37516 48.5914 8.09545 50.4843 9.53604 51.9225L13.0121 48.4464ZM12.2918 46.7083C12.2905 46.3853 12.3536 46.0653 12.4772 45.7669C12.6009 45.4685 12.7827 45.1977 13.0121 44.9703L9.53604 41.4942C8.8505 42.1784 8.30675 42.9912 7.93594 43.8859C7.56513 44.7807 7.37457 45.7398 7.37516 46.7083H12.2918ZM31.9585 44.25H19.6668V49.1667H31.9585V44.25ZM16.4882 44.9703C16.97 45.4497 17.2085 46.0765 17.2085 46.7083H22.1252C22.1252 44.8252 21.4049 42.9323 19.9643 41.4942L16.4882 44.9703ZM17.2085 46.7083C17.2092 47.0313 17.146 47.3511 17.0223 47.6495C16.8987 47.9478 16.7172 48.2186 16.4882 48.4464L19.9643 51.9225C20.6498 51.2383 21.1936 50.4255 21.5644 49.5308C21.9352 48.636 22.1258 47.6769 22.1252 46.7083H17.2085ZM51.6252 41.7917C51.6252 42.4437 51.3662 43.0689 50.9051 43.53C50.4441 43.991 49.8188 44.25 49.1668 44.25V49.1667C51.1228 49.1667 52.9987 48.3897 54.3817 47.0066C55.7648 45.6235 56.5418 43.7476 56.5418 41.7917H51.6252ZM44.2502 24.5833C46.2061 24.5833 48.082 25.3603 49.4651 26.7434C50.8482 28.1265 51.6252 30.0024 51.6252 31.9583H56.5418C56.5418 30.3442 56.2239 28.7458 55.6062 27.2545C54.9885 25.7632 54.0831 24.4082 52.9417 23.2668C51.8003 22.1254 50.4453 21.22 48.954 20.6023C47.4627 19.9846 45.8643 19.6667 44.2502 19.6667V24.5833ZM2.4585 41.7917C2.4585 43.7476 3.2355 45.6235 4.61858 47.0066C6.00166 48.3897 7.87752 49.1667 9.8335 49.1667V44.25C9.18151 44.25 8.55622 43.991 8.09519 43.53C7.63416 43.0689 7.37516 42.4437 7.37516 41.7917H2.4585Z" fill="#29B362" />
                <path d="M18.4378 14.75C18.4378 12.794 17.6608 10.9182 16.2777 9.53509C14.8947 8.15201 13.0188 7.375 11.0628 7.375C10.4108 7.375 9.78555 7.634 9.32452 8.09503C8.86349 8.55606 8.60449 9.18134 8.60449 9.83333C8.60449 11.7893 9.3815 13.6652 10.7646 15.0482C12.1477 16.4313 14.0235 17.2083 15.9795 17.2083H18.4378M18.4378 14.75V17.2083M18.4378 14.75C18.4378 12.794 19.2148 10.9182 20.5979 9.53509C21.981 8.15201 23.8569 7.375 25.8128 7.375C26.4648 7.375 27.0901 7.634 27.5511 8.09503C28.0122 8.55606 28.2712 9.18134 28.2712 9.83333C28.2712 11.7893 27.4942 13.6652 26.1111 15.0482C24.728 16.4313 22.8521 17.2083 20.8962 17.2083H18.4378" stroke="#29B362" stroke-width="2" stroke-linejoin="round" />
              </svg>
              <p>SENIN - MINGGU 08:00 - 20:00</p>
            </span>
            <span style={{ marginTop: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                <g clip-path="url(#clip0_18_6408)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0895 38.913C29.5418 48.3652 38.3009 49.4002 40.8723 49.4961C43.9796 49.6092 47.1509 47.0722 48.5226 44.4737C46.3347 41.9072 43.4855 39.916 40.3634 37.7575C38.5246 39.5964 36.258 43.0135 33.2343 41.7892C31.5159 41.0984 27.2728 39.144 23.5656 35.4344C19.856 31.7272 17.9041 27.4842 17.2084 25.7682C15.9841 22.742 19.411 20.4681 21.2523 18.6268C19.0939 15.4555 17.1371 12.5326 14.5755 10.4553C11.9402 11.832 9.38842 14.9786 9.50396 18.1277C9.59983 20.6992 10.6348 29.4582 20.0895 38.913ZM40.6904 54.4078C37.1504 54.2775 27.1179 52.8935 16.611 42.3866C6.10654 31.8821 4.7225 21.8521 4.58975 18.3097C4.39308 12.9112 8.528 7.66754 13.3045 5.61975C13.8797 5.37138 14.5096 5.27681 15.1324 5.34534C15.7552 5.41387 16.3494 5.64313 16.8568 6.01062C20.8098 8.89425 23.5361 13.2627 25.8789 16.6847C26.3663 17.3963 26.5895 18.2558 26.5101 19.1146C26.4306 19.9734 26.0534 20.7774 25.4438 21.3875L22.1103 24.7235C22.8847 26.432 24.4605 29.3771 27.0417 31.9583C29.623 34.5396 32.568 36.1154 34.279 36.8897L37.6101 33.5562C38.2225 32.9453 39.0299 32.5686 39.8915 32.4918C40.7531 32.415 41.6143 32.6429 42.3252 33.1359C45.816 35.5549 49.9165 38.2418 52.9058 42.0695C53.3032 42.5806 53.5559 43.189 53.6377 43.8312C53.7194 44.4734 53.6271 45.1258 53.3705 45.7201C51.3128 50.5212 46.1061 54.607 40.6904 54.4078Z" fill="#29B362" />
                </g>
                <defs>
                  <clipPath id="clip0_18_6408">
                    <rect width="59" height="59" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>+104-0080-66776</p>
            </span>
          </div>
        </div>
        <div className='tiga'>
          <h1>We Here Because of You</h1>
          <div className='d-flex'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="127" height="131" viewBox="0 0 127 131" fill="none">
                <path d="M45.9915 126.692C2.8009 120.131 3.52763 75.3941 3.52763 61.8611H123.472C123.472 68.8259 123.779 119.246 77.17 127.063C69.9663 128.271 54.3876 127.969 45.9915 126.692Z" fill="#292F33" />
                <path d="M117.785 48.2044C126.488 27.9212 88.3953 29.0856 78.8562 32.2588C73.759 31.6449 68.6316 31.3363 63.4998 31.3345C30.3775 31.3345 3.52755 43.0808 3.52755 62.0613C3.52755 65.7329 4.55414 69.2626 6.41327 72.5813C-8.85142 93.3666 21.3922 97.2748 38.8124 93.3593C46.3477 95.3134 54.6874 96.4306 63.4998 96.4306C96.6221 96.4306 123.472 81.0417 123.472 62.0649C123.472 56.8613 121.394 52.2253 117.785 48.2044Z" fill="#66757F" />
                <path d="M63.5002 90.9722C92.7252 90.9722 116.417 79.5679 116.417 65.5C116.417 51.4321 92.7252 40.0278 63.5002 40.0278C34.2751 40.0278 10.5835 51.4321 10.5835 65.5C10.5835 79.5679 34.2751 90.9722 63.5002 90.9722Z" fill="#FFCC4D" />
                <path d="M14.111 58.2222C12.1989 50.3295 21.1665 36.3889 38.8054 40.0278C42.3332 36.3889 48.8172 32.75 59.9721 32.75C67.0276 32.75 79.77 39.209 74.0832 50.9444C70.5554 58.2222 56.4443 69.1389 38.8054 61.8611C35.2776 65.5 17.6387 72.7778 14.111 58.2222Z" fill="#77B255" />
                <path d="M42.3332 61.8611C41.4548 61.9921 40.6717 62.1268 39.9414 62.265C57.0441 68.6185 70.6331 58.0621 74.0832 50.9444C77.8862 43.099 73.4447 37.6261 67.9767 34.8496C69.3666 41.4797 63.9973 58.6698 42.3332 61.8611Z" fill="#5C913B" />
                <path d="M17.639 58.2222C19.491 53.4444 35.2778 47.3056 52.9167 69.1389C56.4445 72.7778 69.0951 74.9102 74.0834 80.0556C77.6112 83.6945 74.0834 87.3333 59.9723 87.3333C45.8612 87.3333 10.5834 76.4167 17.639 58.2222Z" fill="#D99E82" />
                <path d="M21.3115 72.8433C30.3003 82.097 50.204 87.3333 59.9724 87.3333C74.0835 87.3333 77.6113 83.6944 74.0835 80.0555C72.9335 78.8693 71.3672 77.8467 69.6103 76.9261C58.3073 83.2323 28.4059 76.4021 21.3115 72.8433Z" fill="#B27962" />
                <path d="M95.25 69.1425C94.5127 69.1425 93.7578 69.0188 93.017 68.7641L82.4336 65.1252C80.6583 64.5148 79.1907 63.2019 78.3538 61.4754C77.5169 59.7488 77.3792 57.7501 77.971 55.9188C78.5628 54.0875 79.8356 52.5738 81.5094 51.7105C83.1832 50.8472 85.1209 50.7052 86.8963 51.3156L97.4796 54.9545C99.0731 55.4977 100.427 56.609 101.298 58.0889C102.168 59.5688 102.499 61.3204 102.231 63.0292C101.962 64.7381 101.112 66.2922 99.8323 67.4127C98.553 68.5331 96.9283 69.1464 95.25 69.1425ZM91.7223 80.0556H84.6667C83.7311 80.0556 82.8338 79.6722 82.1722 78.9898C81.5106 78.3073 81.1389 77.3818 81.1389 76.4167C81.1389 75.4516 81.5106 74.526 82.1722 73.8436C82.8338 73.1612 83.7311 72.7778 84.6667 72.7778H91.7223C92.6579 72.7778 93.5552 73.1612 94.2168 73.8436C94.8784 74.526 95.25 75.4516 95.25 76.4167C95.25 77.3818 94.8784 78.3073 94.2168 78.9898C93.5552 79.6722 92.6579 80.0556 91.7223 80.0556Z" fill="#FFE8B6" />
              </svg>
              <p>Our food is fresh only make if there a reservation. Don’t worry for the quality because we are using a premium material. We are available for every events. You don’t have to worry about variation, we have more than 50 variation of our food, and more than 30 of our beverage.</p>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
                <path d="M56.3899 48.74L26.2199 33.8C26.2199 33.8 26.1499 32.37 27.4999 31.65C28.8599 30.93 50.2399 22.17 51.9599 22.17C53.6799 22.17 63.7499 24.11 71.0799 25.74C78.4099 27.37 97.7799 31.53 97.8699 32.8C97.9599 34.07 78.0499 54.43 78.0499 54.43L56.3899 48.74Z" fill="#C3FECE" />
                <path d="M83.9099 39.42C83.9099 39.42 71.2599 35.7 58.9499 32.81C53.2199 31.46 36.3799 27.93 36.3799 27.93C36.3799 27.93 38.1699 27.15 39.5199 26.58C40.8899 26.01 41.9799 25.71 41.9799 25.71C41.9799 25.71 52.9599 27.9 61.1199 29.64C72.1599 31.99 87.6099 36.6 87.9699 37.33C88.3399 38.05 83.9099 39.42 83.9099 39.42Z" fill="white" />
                <path d="M59.41 35.92C56.72 37.79 59.36 38.92 64.32 40.08C69.75 41.35 73.89 43.22 77.38 41.19C80.53 39.37 72.82 37.39 69.28 36.63C66.58 36.05 61.49 34.48 59.41 35.92Z" fill="#ACB1B2" />
                <path d="M69.27 39.68C69.25 39.68 69.36 17.77 69.36 16.96C69.36 16.15 68.45 15.42 69.45 13.7C70.45 11.98 73.07 12.16 73.07 12.16C73.07 12.16 83.94 9.00001 88.28 7.91001C92.62 6.82001 102.22 4.29001 102.22 4.29001L102.86 9.78001C102.86 9.78001 92.8 12.62 87.82 13.89C82.84 15.16 76.05 17.24 76.05 17.24L75.05 18.15L75.34 39.56C75.34 39.56 74.41 40.6 72.33 40.6C70.31 40.59 69.27 39.68 69.27 39.68Z" fill="#FFD816" />
                <path d="M100.43 7.1C100.51 8.81 101.42 9.87 102.5 9.87C103.58 9.87 104.32 8.49 104.16 6.69C103.99 4.9 102.83 4.08 101.84 4.41C100.85 4.74 100.37 5.85 100.43 7.1ZM75.0701 18.65C74.8801 18.65 74.6901 18.6 74.5201 18.48L69.3301 15.02C69.1102 14.8715 68.9575 14.6425 68.9051 14.3824C68.8528 14.1223 68.9048 13.852 69.0501 13.63C69.1227 13.5201 69.2164 13.4256 69.3257 13.352C69.4349 13.2784 69.5577 13.2271 69.6869 13.2011C69.816 13.175 69.9491 13.1748 70.0783 13.2004C70.2076 13.2259 70.3305 13.2768 70.4401 13.35L75.6301 16.81C76.0901 17.12 76.2101 17.74 75.9101 18.2C75.7101 18.49 75.3901 18.65 75.0701 18.65Z" fill="#FEB804" />
                <path d="M75.87 17.81C75.57 17.81 75.27 17.67 75.07 17.41C73.74 15.64 72.22 13.63 71.95 13.32C71.61 12.99 71.54 12.45 71.81 12.04C71.8827 11.9301 71.9763 11.8356 72.0856 11.762C72.1949 11.6884 72.3176 11.6371 72.4468 11.6111C72.576 11.585 72.709 11.5848 72.8383 11.6104C72.9675 11.6359 73.0905 11.6868 73.2 11.76C73.38 11.88 73.48 11.95 76.67 16.2C77 16.64 76.7 17.27 76.26 17.6C76.08 17.74 76.08 17.81 75.87 17.81Z" fill="#FEB804" />
                <path d="M74.6501 19.49C74.6001 19.49 74.5501 19.49 74.4901 19.48L69.4901 18.69C69.3607 18.6697 69.2366 18.624 69.1249 18.5557C69.0132 18.4874 68.916 18.3978 68.839 18.2919C68.7619 18.186 68.7064 18.066 68.6757 17.9387C68.645 17.8115 68.6397 17.6794 68.6601 17.55C68.6804 17.4207 68.7261 17.2966 68.7944 17.1849C68.8627 17.0731 68.9523 16.976 69.0582 16.8989C69.164 16.8218 69.284 16.7664 69.4113 16.7357C69.5386 16.705 69.6707 16.6997 69.8001 16.72L74.8001 17.51C75.3401 17.6 75.8101 17.7 75.7201 18.25C75.6501 18.73 75.1401 19.49 74.6501 19.49Z" fill="#FEB804" />
                <path d="M26.1802 33.69C27.7702 33.69 40.5302 37.04 47.1102 38.25C53.6902 39.46 73.5602 44.16 74.2302 44.29C74.9002 44.42 74.7702 53.02 74.7702 53.02C74.7702 53.02 84.1702 101.62 83.9002 103.91C83.6302 106.19 77.4602 123.78 77.4602 123.78C77.4602 123.78 73.8302 124.32 64.5702 121.63C55.3102 118.94 30.8702 112.23 29.3902 110.35C27.9102 108.47 28.8502 83.63 28.0502 68.33C27.2302 53.02 26.1802 33.69 26.1802 33.69Z" fill="#79DD8A" />
                <path d="M100.27 111.42C100.78 109.73 97.9398 91.61 97.5398 74.96C97.1398 58.32 98.5698 33 97.8798 32.8C97.1898 32.61 74.2298 44.29 74.2298 44.29C74.2298 44.29 74.1298 60.81 74.4098 76.39C74.7698 96.55 76.3798 123.24 77.4498 123.78C78.5198 124.32 87.8098 119.12 90.6098 117.6C95.5698 114.91 99.8698 112.77 100.27 111.42Z" fill="#02AB46" />
                <path d="M83.8398 51.94L83.8898 39.4L87.9998 37.38L88.1199 51.13L86.2198 54.46L83.8398 51.94Z" fill="#DBDFE1" />
                <path d="M47.4498 56.34C38.5698 55.39 32.4198 63.31 32.8998 73.63C33.4698 85.82 41.4998 94.8 50.1898 96.59C58.8798 98.38 67.2998 94.61 67.4798 81.28C67.6798 67.39 55.4698 57.19 47.4498 56.34Z" fill="#FEFEFD" />
                <path d="M53.3699 67.47C53.3699 67.47 51.5699 61.42 46.1599 63.03C40.7499 64.64 37.8199 76.41 46.9999 81.71C55.8199 86.8 63.9399 77.46 61.0999 71.41C58.5199 65.89 53.3699 67.47 53.3699 67.47Z" fill="#EF5B44" />
                <path d="M51.31 60.07C50.7 60.29 50.22 62.78 50.86 65.16C51.34 66.94 52.87 69.38 53.76 69.22C54.47 69.09 55.01 66.29 54.34 63.94C53.56 61.23 52.02 59.81 51.31 60.07Z" fill="#B8CF17" />
                <path d="M51.1799 74.11C48.6399 73.34 45.7799 82.07 50.9199 87.51C56.5899 93.5 63.2099 88.22 63.0299 87.06C62.7699 85.45 58.3299 84.29 56.1399 81.59C53.9499 78.87 52.6599 74.56 51.1799 74.11Z" fill="#FD8F01" />
                <path d="M43.0599 72.63C43.0599 72.63 43.5699 68.81 40.0299 69.02C36.6099 69.23 37.4499 73.27 37.4499 73.27C37.4499 73.27 34.5999 73.61 35.0799 76.77C35.4399 79.16 37.9599 79.13 37.9599 79.13C37.9599 79.13 35.1899 80.22 36.4499 83.38C37.5699 86.19 40.1499 85.06 40.1499 85.06C40.1499 85.06 39.1999 87.8 41.4399 89.25C43.3299 90.47 44.9799 89.44 44.9799 89.44C44.9799 89.44 44.8799 91.78 47.4899 92.21C50.6499 92.73 52.0199 88.88 49.7699 87.1C48.0599 85.75 46.5099 86.8 46.5099 86.8C46.5099 86.8 46.8299 86.05 46.5299 85.19C46.3299 84.63 46.0099 84.42 46.0099 84.42C46.0099 84.42 48.7799 84.16 48.3299 81.01C47.8799 77.85 45.1099 78.24 45.1099 78.24C45.1099 78.24 46.7199 76.95 46.0799 74.63C45.4499 72.3 43.0599 72.63 43.0599 72.63Z" fill="#A281D0" />
                <path d="M86.69 55.43C84.39 55.43 74.58 45.68 74.49 45.58C74.4045 45.4803 74.3395 45.3646 74.2988 45.2397C74.258 45.1149 74.2423 44.9832 74.2525 44.8522C74.2628 44.7212 74.2987 44.5936 74.3583 44.4765C74.4179 44.3594 74.5001 44.2553 74.6 44.17C75.02 43.81 75.64 43.86 76.01 44.27C76.64 44.97 84.14 51.93 86.3 53.27C87.7 51.18 92.25 42.03 96.16 33.77C96.4 33.27 97 33.06 97.49 33.29C97.99 33.53 98.2 34.12 97.97 34.62C88.33 54.99 87.38 55.26 86.87 55.4C86.81 55.43 86.75 55.43 86.69 55.43Z" fill="#2D802D" />
              </svg>
              <p>Our food is fresh only make if there a reservation. Don’t worry for the quality because we are using a premium material. We are available for every events. You don’t have to worry about variation, we have more than 50 variation of our food, and more than 30 of our beverage.</p>
            </span>
          </div>
        </div>
      </div>
  </div>
    </>
  )
}