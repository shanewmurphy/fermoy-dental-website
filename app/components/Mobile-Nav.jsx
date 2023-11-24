"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SignImg from "/public/Sign.webp";
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-5 left-0  right-0 mobile-nav antialiased">
      <div className="w-10/12 mx-auto flex justify-between items-center bg-white/90 py-2 px-4 backdrop-opacity-70 rounded-md">
        <div>
          <Link href="/">
            <LogoMobile />
          </Link>
        </div>
        <div>
          <div>
            <button
              className="font-semibold text-cyan-950"
              onClick={() => setOpen(true)}
            >
              Menu
            </button>
          </div>
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-in-out duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in-out duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="absolute right-0 top-0 -ml-8 flex pr-6 pt-4 sm:-ml-10 sm:pr-4">
                            <button
                              type="button"
                              className="relative rounded-md text-gray-600 hover:text-grey/400 focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close</span>
                              <XMarkIcon
                                className="h-8 w-8 text-cyan-900"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </Transition.Child>
                        <div className="flex h-full flex-col overflow-y-scroll bg-lightBrown py-6 shadow-xl">
                          <div className="px-4 sm:px-6">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900"></Dialog.Title>
                          </div>
                          <div className="relative gap-4">
                            <div className="py-8 px-8 text-cyan-950">
                              <Link
                                href="/"
                                className="text-2xl block font-semibold mb-4"
                              >
                                Home
                              </Link>
                              <Link
                                href="Treatments"
                                className="text-2xl block font-semibold mb-4"
                              >
                                Treatments
                              </Link>
                              <Link
                                href="About"
                                className="text-2xl block font-semibold mb-4"
                              >
                                About Us
                              </Link>
                              <Link
                                href="Contact"
                                className="text-2xl block font-semibold mb-4"
                              >
                                Contact Us
                              </Link>
                              <div className="mt-8">
                                <div className="bg-white py-4 px-4 rounded-lg">
                                  <Image
                                    src={SignImg}
                                    className="rounded-md"
                                    alt="Fermoy Dental Centre"
                                    placeholder="blur"
                                    priority
                                  />
                                  <div>
                                    <h4 className="font-bold text-cyan-950 mt-3">
                                      Call Us 025 31136
                                    </h4>
                                    <p className="font-semibold text-cyan-950 text-xs">
                                      Mon - Fri 09:30am - 17:30pm
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </div>
    </div>
  );
}
function LogoMobile() {
  return (
    <svg
      width="70"
      height="22"
      viewBox="0 0 70 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.90133 3.77746C6.59119 4.08884 8.40595 3.93315 9.97061 3.13224C11.4519 2.33133 13.0373 1.04057 14.8106 1.24088C15.9578 1.41903 16.8131 2.55378 16.9594 3.73315C17.2931 7.53803 15.5199 12.3444 13.4963 15.4152C14.4142 12.122 15.3739 8.80662 15.7077 5.3799C15.7495 4.69006 15.8121 3.95592 15.5617 3.31039C15.0402 2.13102 14.0181 2.26456 13.0166 2.62055C11.9316 2.95439 10.9304 3.555 9.84571 3.93346C8.23893 4.44514 6.4657 4.37837 4.90133 3.77746ZM1.27122 5.42421C1.33382 4.22269 1.62575 2.64271 2.81483 2.19779C3.39898 1.97533 4.02467 2.21994 4.58805 2.4424C5.52673 2.75378 6.50724 2.97655 7.48775 3.02085C6.73687 2.59809 5.65193 1.99718 4.92181 1.57441C4.46286 1.28519 3.96207 1.06273 3.41975 1.01811C2.20991 0.862422 1.06237 1.7301 0.582647 2.86486C-1.46174 7.93802 2.29327 15.0807 5.36 18.908C3.44081 14.6807 1.22969 10.2303 1.27122 5.42421ZM10.2418 13.5681C9.63685 12.9672 8.76048 12.8561 7.98882 13.034C6.2156 13.5013 6.11117 15.6373 6.65378 17.1505C6.84158 16.0158 7.00832 14.1466 8.42701 14.1912C9.2405 14.1912 9.61608 14.5918 9.78311 15.4148C9.82494 15.5705 9.84571 15.7487 9.86648 15.9044C10.0124 17.5733 9.72051 19.3311 9.59531 21C10.7423 19.1976 11.9524 15.3481 10.2418 13.5681Z"
        fill="#083344"
      />
      <path
        d="M63.3578 13.8635C63.1126 13.8635 62.8855 13.8436 62.6767 13.8039C62.4712 13.7674 62.3072 13.7243 62.1845 13.6746L62.6022 12.2726C62.864 12.3488 63.0977 12.3853 63.3031 12.382C63.5086 12.3787 63.6893 12.314 63.8451 12.1881C64.0041 12.0655 64.1384 11.86 64.2477 11.5716L64.4019 11.159L61.6327 3.36353H63.5418L65.3017 9.13057H65.3813L67.1462 3.36353H69.0602L66.0027 11.9246C65.8602 12.329 65.6713 12.6753 65.436 12.9637C65.2006 13.2553 64.9123 13.4774 64.5709 13.6299C64.2328 13.7856 63.8285 13.8635 63.3578 13.8635Z"
        fill="#083344"
      />
      <path
        d="M57.3123 11.1491C56.5665 11.1491 55.9202 10.985 55.3734 10.6569C54.8265 10.3288 54.4022 9.86975 54.1006 9.27979C53.8023 8.68982 53.6532 8.00043 53.6532 7.2116C53.6532 6.42278 53.8023 5.73173 54.1006 5.13845C54.4022 4.54517 54.8265 4.08447 55.3734 3.75635C55.9202 3.42822 56.5665 3.26416 57.3123 3.26416C58.058 3.26416 58.7043 3.42822 59.2512 3.75635C59.7981 4.08447 60.2207 4.54517 60.519 5.13845C60.8206 5.73173 60.9714 6.42278 60.9714 7.2116C60.9714 8.00043 60.8206 8.68982 60.519 9.27979C60.2207 9.86975 59.7981 10.3288 59.2512 10.6569C58.7043 10.985 58.058 11.1491 57.3123 11.1491ZM57.3222 9.70734C57.7266 9.70734 58.0647 9.59631 58.3364 9.37425C58.6082 9.14887 58.8104 8.84726 58.943 8.46942C59.0789 8.09158 59.1468 7.67065 59.1468 7.20663C59.1468 6.7393 59.0789 6.31672 58.943 5.93888C58.8104 5.55772 58.6082 5.25445 58.3364 5.02908C58.0647 4.8037 57.7266 4.69101 57.3222 4.69101C56.9079 4.69101 56.5632 4.8037 56.2881 5.02908C56.0164 5.25445 55.8125 5.55772 55.6766 5.93888C55.5441 6.31672 55.4778 6.7393 55.4778 7.20663C55.4778 7.67065 55.5441 8.09158 55.6766 8.46942C55.8125 8.84726 56.0164 9.14887 56.2881 9.37425C56.5632 9.59631 56.9079 9.70734 57.3222 9.70734Z"
        fill="#083344"
      />
      <path
        d="M41.4169 11V3.36359H43.137V4.66118H43.2265C43.3856 4.22368 43.6491 3.88229 44.017 3.63703C44.3849 3.38845 44.8241 3.26416 45.3345 3.26416C45.8515 3.26416 46.2874 3.39011 46.642 3.642C47 3.89058 47.2519 4.23031 47.3977 4.66118H47.4772C47.6463 4.23693 47.9313 3.89887 48.3324 3.64697C48.7367 3.39176 49.2156 3.26416 49.7691 3.26416C50.4718 3.26416 51.0452 3.48622 51.4893 3.93035C51.9334 4.37448 52.1555 5.02245 52.1555 5.87425V11H50.3508V6.15265C50.3508 5.6787 50.2249 5.33234 49.973 5.11359C49.7211 4.89153 49.4128 4.7805 49.0483 4.7805C48.6141 4.7805 48.2744 4.91639 48.0291 5.18817C47.7871 5.45663 47.6662 5.8063 47.6662 6.23717V11H45.9012V6.07808C45.9012 5.68367 45.7819 5.3688 45.5433 5.13348C45.308 4.89816 44.9997 4.7805 44.6186 4.7805C44.3601 4.7805 44.1247 4.84678 43.9126 4.97936C43.7005 5.10862 43.5315 5.29257 43.4055 5.53121C43.2796 5.76653 43.2166 6.04162 43.2166 6.35649V11H41.4169Z"
        fill="#083344"
      />
      <path
        d="M35.8661 10.9999V3.36353H37.6111V4.63625H37.6907C37.8299 4.19544 38.0685 3.85571 38.4066 3.61708C38.748 3.37513 39.1374 3.25415 39.5749 3.25415C39.6743 3.25415 39.7854 3.25912 39.908 3.26906C40.0339 3.27569 40.1383 3.28729 40.2212 3.30387V4.95941C40.145 4.93289 40.024 4.90969 39.8583 4.8898C39.6959 4.8666 39.5384 4.855 39.386 4.855C39.0579 4.855 38.7629 4.92626 38.501 5.06878C38.2425 5.20799 38.0387 5.40188 37.8895 5.65046C37.7404 5.89904 37.6658 6.18573 37.6658 6.51054V10.9999H35.8661Z"
        fill="#083344"
      />
      <path
        d="M30.9479 11.1491C30.1823 11.1491 29.5211 10.99 28.9643 10.6718C28.4108 10.3503 27.9849 9.89626 27.6866 9.30961C27.3883 8.71965 27.2391 8.02529 27.2391 7.22652C27.2391 6.44101 27.3883 5.75161 27.6866 5.15834C27.9882 4.56175 28.4091 4.09773 28.9494 3.76629C29.4896 3.43154 30.1243 3.26416 30.8535 3.26416C31.3241 3.26416 31.7683 3.34039 32.1859 3.49285C32.6068 3.642 32.978 3.87401 33.2995 4.18888C33.6243 4.50374 33.8795 4.90478 34.0651 5.392C34.2507 5.8759 34.3435 6.45261 34.3435 7.12211V7.67396H28.0843V6.46089H32.6184C32.6151 6.1162 32.5405 5.80961 32.3947 5.54115C32.2488 5.26937 32.045 5.05559 31.7832 4.89981C31.5246 4.74404 31.223 4.66615 30.8783 4.66615C30.5104 4.66615 30.1873 4.75564 29.9089 4.93461C29.6305 5.11028 29.4134 5.34229 29.2576 5.63064C29.1051 5.91568 29.0273 6.22889 29.0239 6.57027V7.62922C29.0239 8.07335 29.1051 8.4545 29.2675 8.77268C29.43 9.08755 29.657 9.3295 29.9487 9.49854C30.2403 9.66426 30.5817 9.74711 30.9728 9.74711C31.2346 9.74711 31.4716 9.71066 31.6837 9.63774C31.8959 9.56151 32.0798 9.45048 32.2356 9.30464C32.3914 9.15881 32.509 8.97818 32.5886 8.76274L34.269 8.95166C34.1629 9.39579 33.9607 9.78357 33.6624 10.115C33.3675 10.4431 32.9896 10.6983 32.5289 10.8806C32.0682 11.0596 31.5412 11.1491 30.9479 11.1491Z"
        fill="#083344"
      />
      <path
        d="M20.0043 10.9999V0.818115H26.527V2.36428H21.8487V5.12848H26.0796V6.67465H21.8487V10.9999H20.0043Z"
        fill="#083344"
      />
      <path d="M55.3026 12.2727V21H54.0284V12.2727H55.3026Z" fill="#083344" />
      <path
        d="M49.1012 21.145C48.6864 21.145 48.3114 21.0682 47.9762 20.9148C47.6409 20.7586 47.3753 20.5327 47.1793 20.2373C46.9861 19.9418 46.8895 19.5796 46.8895 19.1506C46.8895 18.7813 46.9606 18.4773 47.1026 18.2387C47.2446 18.0001 47.4364 17.8111 47.6779 17.6719C47.9194 17.5327 48.1892 17.4276 48.4875 17.3566C48.7858 17.2856 49.0898 17.2316 49.3995 17.1947C49.7915 17.1492 50.1097 17.1123 50.354 17.0839C50.5983 17.0526 50.7759 17.0029 50.8867 16.9347C50.9975 16.8665 51.0529 16.7557 51.0529 16.6023V16.5725C51.0529 16.2004 50.9478 15.912 50.7375 15.7075C50.5302 15.5029 50.2205 15.4006 49.8086 15.4006C49.3796 15.4006 49.0415 15.4958 48.7944 15.6861C48.55 15.8736 48.381 16.0825 48.2873 16.3126L47.0898 16.0398C47.2319 15.6421 47.4392 15.3211 47.712 15.0768C47.9875 14.8296 48.3043 14.6506 48.6623 14.5398C49.0202 14.4262 49.3966 14.3694 49.7915 14.3694C50.0529 14.3694 50.3299 14.4006 50.6225 14.4631C50.9179 14.5228 51.1935 14.6336 51.4492 14.7955C51.7077 14.9575 51.9194 15.189 52.0841 15.4901C52.2489 15.7884 52.3313 16.1762 52.3313 16.6535V21.0001H51.087V20.1052H51.0358C50.9534 20.27 50.8299 20.4319 50.6651 20.591C50.5003 20.7501 50.2887 20.8822 50.0302 20.9873C49.7716 21.0924 49.462 21.145 49.1012 21.145ZM49.3782 20.1222C49.7304 20.1222 50.0316 20.0526 50.2816 19.9134C50.5344 19.7742 50.7262 19.5924 50.8569 19.368C50.9904 19.1407 51.0571 18.8978 51.0571 18.6393V17.7955C51.0117 17.841 50.9236 17.8836 50.7929 17.9234C50.6651 17.9603 50.5188 17.993 50.354 18.0214C50.1892 18.0469 50.0287 18.0711 49.8725 18.0938C49.7162 18.1137 49.5856 18.1307 49.4804 18.145C49.2333 18.1762 49.0074 18.2288 48.8029 18.3026C48.6012 18.3765 48.4392 18.483 48.3171 18.6222C48.1978 18.7586 48.1381 18.9404 48.1381 19.1677C48.1381 19.483 48.2546 19.7217 48.4875 19.8836C48.7205 20.0427 49.0174 20.1222 49.3782 20.1222Z"
        fill="#083344"
      />
      <path
        d="M45.787 14.4547V15.4774H42.2117V14.4547H45.787ZM43.1705 12.8865H44.4446V19.0782C44.4446 19.3254 44.4816 19.5115 44.5554 19.6365C44.6293 19.7586 44.7245 19.8424 44.8409 19.8879C44.9603 19.9305 45.0895 19.9518 45.2287 19.9518C45.331 19.9518 45.4205 19.9447 45.4972 19.9305C45.5739 19.9163 45.6335 19.9049 45.6762 19.8964L45.9063 20.949C45.8324 20.9774 45.7273 21.0058 45.5909 21.0342C45.4546 21.0655 45.2841 21.0825 45.0796 21.0853C44.7443 21.091 44.4318 21.0314 44.1421 20.9064C43.8523 20.7814 43.6179 20.5882 43.4389 20.3268C43.26 20.0655 43.1705 19.7373 43.1705 19.3424V12.8865Z"
        fill="#083344"
      />
      <path
        d="M36.8338 17.1137V21.0001H35.5597V14.4546H36.7827V15.52H36.8637C37.0142 15.1734 37.25 14.895 37.5711 14.6847C37.8949 14.4745 38.3026 14.3694 38.7941 14.3694C39.2401 14.3694 39.6307 14.4631 39.9659 14.6506C40.3012 14.8353 40.5611 15.1109 40.7458 15.4773C40.9304 15.8438 41.0228 16.2969 41.0228 16.8367V21.0001H39.7486V16.9901C39.7486 16.5157 39.625 16.145 39.3779 15.8779C39.1307 15.608 38.7912 15.4731 38.3594 15.4731C38.064 15.4731 37.8012 15.537 37.5711 15.6648C37.3438 15.7927 37.1634 15.9802 37.0299 16.2273C36.8992 16.4717 36.8338 16.7671 36.8338 17.1137Z"
        fill="#083344"
      />
      <path
        d="M31.3377 21.1322C30.6928 21.1322 30.1374 20.9944 29.6715 20.7188C29.2085 20.4404 28.8505 20.0498 28.5977 19.5469C28.3477 19.0413 28.2227 18.4489 28.2227 17.77C28.2227 17.0995 28.3477 16.5086 28.5977 15.9972C28.8505 15.4859 29.2028 15.0867 29.6545 14.7998C30.109 14.5129 30.6403 14.3694 31.2482 14.3694C31.6175 14.3694 31.9755 14.4305 32.3221 14.5526C32.6687 14.6748 32.9798 14.8665 33.2553 15.1279C33.5309 15.3893 33.7482 15.7288 33.9073 16.1464C34.0664 16.5611 34.146 17.0654 34.146 17.6592V18.1109H28.9428V17.1563H32.8974C32.8974 16.8211 32.8292 16.5242 32.6928 16.2657C32.5565 16.0043 32.3647 15.7984 32.1175 15.6478C31.8732 15.4972 31.5863 15.4219 31.2567 15.4219C30.8988 15.4219 30.5863 15.51 30.3192 15.6861C30.055 15.8594 29.8505 16.0867 29.7056 16.368C29.5636 16.6464 29.4925 16.9489 29.4925 17.2756V18.0214C29.4925 18.4589 29.5692 18.831 29.7227 19.1379C29.8789 19.4447 30.0962 19.679 30.3746 19.841C30.6531 20.0001 30.9783 20.0796 31.3505 20.0796C31.592 20.0796 31.8121 20.0455 32.011 19.9773C32.2099 19.9063 32.3817 19.8012 32.5266 19.662C32.6715 19.5228 32.7823 19.3509 32.859 19.1464L34.065 19.3637C33.9684 19.7188 33.7951 20.0299 33.5451 20.2969C33.2979 20.5611 32.9869 20.7671 32.6119 20.9148C32.2397 21.0597 31.815 21.1322 31.3377 21.1322Z"
        fill="#083344"
      />
      <path
        d="M22.7841 21H19.9589V12.2727H22.8736C23.7287 12.2727 24.4631 12.4474 25.0768 12.7969C25.6904 13.1434 26.1606 13.642 26.4873 14.2926C26.8168 14.9403 26.9816 15.7173 26.9816 16.6236C26.9816 17.5326 26.8154 18.3139 26.483 18.9673C26.1535 19.6207 25.6762 20.1236 25.0512 20.4758C24.4262 20.8253 23.6705 21 22.7841 21ZM21.2756 19.8494H22.7117C23.3765 19.8494 23.929 19.7244 24.3694 19.4744C24.8097 19.2216 25.1393 18.8565 25.358 18.3792C25.5768 17.8991 25.6861 17.3139 25.6861 16.6236C25.6861 15.9389 25.5768 15.3579 25.358 14.8807C25.1421 14.4034 24.8197 14.0412 24.3907 13.794C23.9617 13.5469 23.429 13.4233 22.7927 13.4233H21.2756V19.8494Z"
        fill="#083344"
      />
    </svg>
  );
}
