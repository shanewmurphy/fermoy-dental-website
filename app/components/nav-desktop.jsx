export default function NavDesktop() {
  return (
    <div className="absolute top-5 left-0 right-0 desktop-nav antialiased">
      <div className="w-10/12 mx-auto bg-slate-700/80 backdrop-opacity-70 rounded-md p-2 flex justify-between items-center">
        <div>
          <ul className="inline-flex items-center pt-1 text-white text-xs font-semibold uppercase antialiased">
            <li className="pl-3">
              <Logo />
            </li>
            <li className="pl-3">Treatments</li>
            <li className="pl-3">About Us</li>
            <li className="pl-3">The Team</li>
            <li className="pl-3">Medical Cards</li>
            <li className="pl-3">Contact Us</li>
          </ul>
        </div>
        <div>
          <button className="bg-btn py-2 px-4 font-semibold  text-sm text-white rounded mr-2">
            Call Us 025-31137
          </button>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="81"
      height="28"
      viewBox="0 0 81 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.91953 3.88844C9.30521 4.32438 11.8672 4.10641 14.0762 2.98513C16.1674 1.86386 18.4057 0.0568024 20.909 0.337229C22.5287 0.586641 23.7362 2.1753 23.9426 3.82641C24.4138 9.15324 21.9105 15.8822 19.0536 20.1812C20.3495 15.5708 21.7044 10.9293 22.1756 6.13186C22.2346 5.16609 22.323 4.13829 21.9695 3.23454C21.2332 1.58343 19.7903 1.77038 18.3763 2.26877C16.8447 2.73615 15.4311 3.577 13.8998 4.10684C11.6314 4.8232 9.12805 4.72972 6.91953 3.88844ZM1.79467 6.19389C1.88304 4.51176 2.29518 2.29979 3.97387 1.6769C4.79856 1.36546 5.68189 1.70792 6.47725 2.01936C7.80245 2.45529 9.1867 2.76717 10.5709 2.8292C9.51087 2.23733 7.97919 1.39605 6.94844 0.804177C6.3005 0.399259 5.59351 0.0878178 4.82788 0.0253571C3.11987 -0.192609 1.49982 1.02214 0.822561 2.6108C-2.06363 9.71323 3.23756 19.713 7.56706 25.0712C4.85761 19.153 1.73603 12.9224 1.79467 6.19389ZM14.459 17.5953C13.605 16.7541 12.3677 16.5986 11.2783 16.8475C8.77496 17.5019 8.62754 20.4922 9.39358 22.6107C9.6587 21.0221 9.89409 18.4052 11.897 18.4676C13.0454 18.4676 13.5756 19.0285 13.8114 20.1808C13.8705 20.3987 13.8998 20.6482 13.9291 20.8661C14.1352 23.2026 13.7231 25.6635 13.5463 28C15.1656 25.4766 16.874 20.0873 14.459 17.5953Z"
        fill="white"
      />
      <path
        d="M74.5262 17.0682C74.2634 17.0682 74.0202 17.0469 73.7965 17.0043C73.5763 16.9652 73.4005 16.919 73.2691 16.8658L73.7166 15.3636C73.9971 15.4453 74.2475 15.4844 74.4676 15.4808C74.6878 15.4773 74.8813 15.408 75.0482 15.2731C75.2187 15.1417 75.3625 14.9215 75.4797 14.6126L75.6448 14.1705L72.6779 5.81818H74.7233L76.609 11.9972H76.6942L78.5852 5.81818H80.636L77.36 14.9908C77.2073 15.424 77.0049 15.7951 76.7528 16.104C76.5007 16.4165 76.1917 16.6545 75.8259 16.8178C75.4637 16.9847 75.0305 17.0682 74.5262 17.0682Z"
        fill="white"
      />
      <path
        d="M68.049 14.1598C67.25 14.1598 66.5575 13.984 65.9716 13.6324C65.3856 13.2809 64.9311 12.7891 64.6079 12.157C64.2883 11.5248 64.1285 10.7862 64.1285 9.94104C64.1285 9.09587 64.2883 8.35546 64.6079 7.71981C64.9311 7.08415 65.3856 6.59055 65.9716 6.23898C66.5575 5.88742 67.25 5.71164 68.049 5.71164C68.848 5.71164 69.5405 5.88742 70.1264 6.23898C70.7123 6.59055 71.1651 7.08415 71.4847 7.71981C71.8079 8.35546 71.9694 9.09587 71.9694 9.94104C71.9694 10.7862 71.8079 11.5248 71.4847 12.157C71.1651 12.7891 70.7123 13.2809 70.1264 13.6324C69.5405 13.984 68.848 14.1598 68.049 14.1598ZM68.0596 12.615C68.4929 12.615 68.8551 12.4961 69.1463 12.2582C69.4375 12.0167 69.6541 11.6935 69.7962 11.2887C69.9418 10.8839 70.0145 10.4329 70.0145 9.93572C70.0145 9.43501 69.9418 8.98224 69.7962 8.57741C69.6541 8.16903 69.4375 7.8441 69.1463 7.60262C68.8551 7.36114 68.4929 7.2404 68.0596 7.2404C67.6158 7.2404 67.2464 7.36114 66.9517 7.60262C66.6605 7.8441 66.4421 8.16903 66.2965 8.57741C66.1545 8.98224 66.0834 9.43501 66.0834 9.93572C66.0834 10.4329 66.1545 10.8839 66.2965 11.2887C66.4421 11.6935 66.6605 12.0167 66.9517 12.2582C67.2464 12.4961 67.6158 12.615 68.0596 12.615Z"
        fill="white"
      />
      <path
        d="M51.0182 14V5.81817H52.8612V7.20844H52.9571C53.1276 6.73969 53.4099 6.37393 53.8041 6.11114C54.1982 5.84481 54.6688 5.71164 55.2156 5.71164C55.7696 5.71164 56.2366 5.84658 56.6166 6.11647C57.0001 6.3828 57.27 6.74679 57.4262 7.20844H57.5114C57.6926 6.7539 57.9979 6.39168 58.4276 6.1218C58.8609 5.84836 59.374 5.71164 59.9671 5.71164C60.7199 5.71164 61.3342 5.94957 61.8101 6.42542C62.2859 6.90127 62.5239 7.59552 62.5239 8.50816V14H60.5903V8.80645C60.5903 8.29864 60.4553 7.92755 60.1854 7.69317C59.9156 7.45525 59.5853 7.33628 59.1947 7.33628C58.7295 7.33628 58.3655 7.48188 58.1027 7.77307C57.8435 8.06072 57.7139 8.43536 57.7139 8.89701V14H55.8229V8.72655C55.8229 8.30397 55.695 7.96661 55.4394 7.71448C55.1872 7.46235 54.857 7.33628 54.4486 7.33628C54.1716 7.33628 53.9195 7.40731 53.6922 7.54935C53.4649 7.68785 53.2838 7.88493 53.1489 8.14062C53.0139 8.39275 52.9465 8.68749 52.9465 9.02485V14H51.0182Z"
        fill="white"
      />
      <path
        d="M45.0709 14V5.81818H46.9406V7.18181H47.0258C47.175 6.70951 47.4307 6.34552 47.7929 6.08984C48.1586 5.83061 48.5759 5.70099 49.0446 5.70099C49.1512 5.70099 49.2701 5.70632 49.4015 5.71697C49.5365 5.72407 49.6483 5.7365 49.7371 5.75426V7.52805C49.6554 7.49964 49.5258 7.47478 49.3483 7.45347C49.1743 7.42862 49.0056 7.41619 48.8422 7.41619C48.4907 7.41619 48.1746 7.49254 47.8941 7.64524C47.6171 7.79438 47.3987 8.00213 47.2389 8.26846C47.0791 8.5348 46.9992 8.84197 46.9992 9.18998V14H45.0709Z"
        fill="white"
      />
      <path
        d="M39.8015 14.1598C38.9812 14.1598 38.2727 13.9893 37.6761 13.6484C37.0831 13.304 36.6268 12.8175 36.3072 12.1889C35.9876 11.5568 35.8278 10.8128 35.8278 9.95702C35.8278 9.1154 35.9876 8.37677 36.3072 7.74111C36.6303 7.10191 37.0813 6.60475 37.6601 6.24964C38.239 5.89097 38.919 5.71164 39.7003 5.71164C40.2045 5.71164 40.6804 5.79332 41.1278 5.95667C41.5788 6.11647 41.9766 6.36505 42.321 6.70241C42.669 7.03976 42.9425 7.46945 43.1413 7.99147C43.3402 8.50993 43.4396 9.12783 43.4396 9.84516V10.4364H36.7333V9.13671H41.5913C41.5877 8.76739 41.5078 8.43891 41.3516 8.15127C41.1953 7.86008 40.9769 7.63103 40.6964 7.46412C40.4194 7.29722 40.0962 7.21377 39.7269 7.21377C39.3327 7.21377 38.9865 7.30965 38.6882 7.50141C38.3899 7.68962 38.1573 7.9382 37.9904 8.24715C37.827 8.55255 37.7436 8.88813 37.74 9.2539V10.3885C37.74 10.8643 37.827 11.2727 38.0011 11.6136C38.1751 11.951 38.4183 12.2102 38.7308 12.3913C39.0433 12.5689 39.4091 12.6577 39.8281 12.6577C40.1087 12.6577 40.3626 12.6186 40.5898 12.5405C40.8171 12.4588 41.0142 12.3398 41.1811 12.1836C41.348 12.0273 41.4741 11.8338 41.5593 11.603L43.3597 11.8054C43.2461 12.2812 43.0295 12.6967 42.7099 13.0518C42.3938 13.4034 41.989 13.6768 41.4954 13.8722C41.0018 14.0639 40.4371 14.1598 39.8015 14.1598Z"
        fill="white"
      />
      <path
        d="M28.076 14V3.09091H35.0647V4.74752H30.0523V7.70916H34.5853V9.36577H30.0523V14H28.076Z"
        fill="white"
      />
      <path d="M68.1548 15.8182V26H67.2699V15.8182H68.1548Z" fill="white" />
      <path
        d="M61.6098 26.174C61.1491 26.174 60.7281 26.0845 60.347 25.9055C59.9658 25.7232 59.6626 25.4614 59.4372 25.12C59.2118 24.7753 59.0991 24.3577 59.0991 23.8672C59.0991 23.4893 59.1704 23.1711 59.3129 22.9126C59.4554 22.6541 59.6576 22.442 59.9194 22.2763C60.1813 22.1105 60.4912 21.9796 60.8491 21.8835C61.2071 21.7874 61.6015 21.7128 62.0324 21.6598C62.4599 21.6068 62.8212 21.5604 63.1162 21.5206C63.4145 21.4808 63.6415 21.4178 63.7973 21.3317C63.9531 21.2455 64.0309 21.1063 64.0309 20.914V20.7351C64.0309 20.2147 63.8752 19.8054 63.5636 19.5071C63.2554 19.2055 62.8112 19.0547 62.2312 19.0547C61.681 19.0547 61.2319 19.1756 60.8839 19.4176C60.5392 19.6595 60.2973 19.9446 60.1581 20.2727L59.3179 19.9694C59.4902 19.5518 59.7289 19.2187 60.0338 18.9702C60.3387 18.7183 60.6801 18.5376 61.0579 18.4283C61.4358 18.3156 61.8186 18.2592 62.2064 18.2592C62.498 18.2592 62.8013 18.2973 63.1162 18.3736C63.4344 18.4498 63.7293 18.5824 64.0011 18.7713C64.2729 18.9569 64.4933 19.2171 64.6623 19.5518C64.8314 19.8833 64.9159 20.3042 64.9159 20.8146V26H64.0309V24.7919H63.9763C63.8702 25.0173 63.7128 25.236 63.504 25.4481C63.2951 25.6603 63.0333 25.8343 62.7184 25.9702C62.4036 26.106 62.034 26.174 61.6098 26.174ZM61.7291 25.3636C62.1997 25.3636 62.6074 25.2592 62.9521 25.0504C63.2968 24.8416 63.562 24.5649 63.7476 24.2202C63.9365 23.8721 64.0309 23.4893 64.0309 23.0717V21.968C63.9647 22.031 63.8536 22.0873 63.6978 22.1371C63.5454 22.1868 63.3681 22.2315 63.1659 22.2713C62.967 22.3077 62.7682 22.3392 62.5693 22.3658C62.3704 22.3923 62.1915 22.4155 62.0324 22.4354C61.6015 22.4884 61.2336 22.5712 60.9287 22.6839C60.6237 22.7966 60.3901 22.9524 60.2277 23.1513C60.0653 23.3468 59.9841 23.5987 59.9841 23.9069C59.9841 24.371 60.1498 24.7306 60.4812 24.9858C60.8127 25.2377 61.2286 25.3636 61.7291 25.3636Z"
        fill="white"
      />
      <path
        d="M57.4672 18.3636V19.1342H53.823V18.3636H57.4672ZM54.9615 16.5341H55.8514V24.0064C55.8514 24.3246 55.9061 24.5748 56.0155 24.7571C56.1248 24.9361 56.2674 25.0637 56.443 25.1399C56.6187 25.2128 56.806 25.2493 57.0048 25.2493C57.1208 25.2493 57.2203 25.2427 57.3031 25.2294C57.386 25.2128 57.4589 25.1963 57.5219 25.1797L57.7108 25.9801C57.6246 26.0133 57.5185 26.0431 57.3926 26.0696C57.2667 26.0994 57.1109 26.1143 56.9253 26.1143C56.6005 26.1143 56.2873 26.0431 55.9856 25.9006C55.6873 25.758 55.4421 25.5459 55.2498 25.2642C55.0576 24.9825 54.9615 24.6328 54.9615 24.2152V16.5341Z"
        fill="white"
      />
      <path
        d="M47.2369 21.2273V26H46.3519V18.3636H47.212V19.5618H47.2916C47.4705 19.1707 47.7489 18.8575 48.1268 18.6221C48.5079 18.3835 48.9786 18.2642 49.5387 18.2642C50.0525 18.2642 50.5032 18.3719 50.891 18.5873C51.2821 18.7995 51.5854 19.1127 51.8008 19.527C52.0195 19.9413 52.1289 20.45 52.1289 21.0533V26H51.244V21.1079C51.244 20.4815 51.0683 19.986 50.717 19.6214C50.369 19.2569 49.9016 19.0746 49.315 19.0746C48.914 19.0746 48.5577 19.1607 48.2461 19.3331C47.9346 19.5054 47.6876 19.754 47.5053 20.0788C47.3264 20.4003 47.2369 20.7831 47.2369 21.2273Z"
        fill="white"
      />
      <path
        d="M41.3046 26.1591C40.592 26.1591 39.9755 25.9934 39.4551 25.6619C38.9348 25.3272 38.5321 24.8648 38.247 24.2748C37.9653 23.6816 37.8245 22.9988 37.8245 22.2265C37.8245 21.4576 37.9653 20.7748 38.247 20.1782C38.5321 19.5783 38.9248 19.1094 39.4253 18.7713C39.9291 18.4299 40.5108 18.2592 41.1703 18.2592C41.5846 18.2592 41.984 18.3354 42.3685 18.4879C42.753 18.6371 43.0977 18.8674 43.4026 19.179C43.7108 19.4872 43.9544 19.8766 44.1334 20.3473C44.3124 20.8146 44.4019 21.3681 44.4019 22.0078V22.4453H38.436V21.6648H43.497C43.497 21.1742 43.3976 20.7334 43.1988 20.3423C43.0032 19.9479 42.7298 19.6363 42.3784 19.4077C42.0304 19.179 41.6277 19.0646 41.1703 19.0646C40.6864 19.0646 40.2605 19.1939 39.8926 19.4524C39.5247 19.7109 39.2364 20.0523 39.0276 20.4765C38.8221 20.9008 38.7177 21.3648 38.7144 21.8686V22.3359C38.7144 22.9425 38.8188 23.4728 39.0276 23.9268C39.2397 24.3776 39.5397 24.7273 39.9274 24.9758C40.3152 25.2244 40.7743 25.3487 41.3046 25.3487C41.6658 25.3487 41.9824 25.2924 42.2542 25.1797C42.5292 25.067 42.7596 24.9162 42.9452 24.7273C43.1341 24.535 43.2766 24.3246 43.3728 24.0959L44.213 24.3693C44.097 24.6908 43.9064 24.9874 43.6412 25.2592C43.3794 25.531 43.0513 25.7497 42.6568 25.9155C42.2658 26.0779 41.815 26.1591 41.3046 26.1591Z"
        fill="white"
      />
      <path
        d="M31.3352 26H28.3523V15.8182H31.5142C32.4853 15.8182 33.3156 16.0204 34.005 16.4247C34.6977 16.8291 35.228 17.4091 35.5959 18.1648C35.9638 18.9204 36.1477 19.8269 36.1477 20.8842C36.1477 21.9515 35.9588 22.8679 35.581 23.6335C35.2065 24.3958 34.6596 24.9808 33.9404 25.3885C33.2245 25.7962 32.3561 26 31.3352 26ZM29.282 25.1648H31.2806C32.1556 25.1648 32.888 24.9924 33.478 24.6477C34.068 24.303 34.5104 23.8108 34.8054 23.1712C35.1004 22.5315 35.2479 21.7692 35.2479 20.8842C35.2446 20.0059 35.0987 19.2502 34.8104 18.6172C34.5254 17.9841 34.1011 17.4986 33.5377 17.1605C32.9775 16.8224 32.2848 16.6534 31.4595 16.6534H29.282V25.1648Z"
        fill="white"
      />
    </svg>
  );
}
