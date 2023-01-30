import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'

interface Props {
  background: string
}

const Footer: FC<Props> = ({background}) => {
  const [terms, setTerms] = React.useState(false)

  useEffect(() => {
    if (terms) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [terms])

  return (
    <>
      <footer className={`bg-blue text-white ${background}`}>
        <div className="container flex flex-col">
          <div className="my-[100px]">
            <svg
              viewBox="0 0 1371 191"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M155.28 155.895V182H0.143401V7.96909H153.788V34.0737H30.4745V81.8079H136.882V107.913H30.4745V155.895H155.28ZM236.825 7.96909V9.95802C232.682 9.95802 229.45 10.8696 227.129 12.6928C224.809 14.3502 223.069 16.7535 221.908 19.9026C220.914 22.886 220.334 26.4495 220.168 30.5931C220.002 34.7367 219.92 39.2118 219.92 44.0184V145.951C219.92 150.923 220.002 155.481 220.168 159.625C220.334 163.768 220.914 167.332 221.908 170.315C223.069 173.298 224.809 175.702 227.129 177.525C229.45 179.182 232.682 180.011 236.825 180.011V182H172.434V180.011C176.743 180.011 180.058 179.182 182.379 177.525C184.699 175.702 186.356 173.298 187.351 170.315C188.511 167.332 189.174 163.768 189.34 159.625C189.506 155.481 189.588 150.923 189.588 145.951V44.0184C189.588 39.046 189.506 34.4881 189.34 30.3445C189.174 26.2009 188.511 22.6374 187.351 19.654C186.356 16.6706 184.699 14.3502 182.379 12.6928C180.058 10.8696 176.743 9.95802 172.434 9.95802V7.96909H236.825ZM419.626 7.96909C433.217 8.13483 444.819 9.62652 454.432 12.4442C464.211 15.2618 472.167 19.0739 478.299 23.8805C484.597 28.6871 489.238 34.3223 492.222 40.7864C495.205 47.2504 496.697 54.1287 496.697 61.4214C496.697 72.029 493.879 83.2167 488.244 94.9845C482.94 105.758 475.399 116.365 465.62 126.807C456.007 137.083 444.57 146.282 431.311 154.404C418.217 162.525 403.466 169.155 387.057 174.293C370.814 179.265 353.411 181.834 334.848 182H243.606L244.6 180.011C248.91 180.011 252.556 179.182 255.54 177.525C258.689 175.702 261.506 173.298 263.992 170.315C266.479 167.332 268.799 163.768 270.954 159.625C273.274 155.481 275.595 150.923 277.915 145.951L327.638 44.0184C330.456 38.5488 332.776 33.5765 334.599 29.1014C336.588 24.4606 337.583 20.6485 337.583 17.6651C337.583 15.3447 336.837 13.5215 335.345 12.1956C333.853 10.7039 331.202 9.95802 327.389 9.95802L328.384 7.96909H419.626ZM296.561 175.785H336.588C349.185 175.785 361.367 173.464 373.135 168.823C384.903 164.183 395.759 158.05 405.703 150.426C415.648 142.802 424.515 134.183 432.305 124.57C440.261 114.957 446.725 105.095 451.697 94.9845C458.493 81.3936 461.89 68.4656 461.89 56.2005C461.89 50.2337 460.979 44.6813 459.156 39.5433C457.333 34.4052 454.515 30.013 450.703 26.3666C447.056 22.5545 442.25 19.5711 436.283 17.4165C430.482 15.2618 423.521 14.1016 415.399 13.9359H391.035C387.057 13.9359 383.659 14.5988 380.842 15.9248C378.19 17.2507 375.704 19.1568 373.383 21.6429C371.229 24.1291 369.157 27.2782 367.168 31.0903C365.179 34.7367 363.024 39.046 360.704 44.0184L296.561 175.785ZM683.081 182H680.097C680.097 173.713 678.523 166.834 675.374 161.365C672.224 155.73 667.501 152.249 661.202 150.923C660.042 155.564 657.888 160.039 654.738 164.348C651.589 168.658 647.529 172.47 642.556 175.785C637.75 179.099 631.949 181.751 625.153 183.74C618.358 185.729 610.734 186.724 602.281 186.724C591.01 186.724 579.574 184.818 567.972 181.006C556.535 177.193 546.093 171.475 536.646 163.851C527.364 156.227 519.74 146.697 513.773 135.26C507.807 123.658 504.823 110.233 504.823 94.9845C504.823 79.7361 507.807 66.3938 513.773 54.9574C519.74 43.3554 527.364 33.7422 536.646 26.118C546.093 18.4938 556.618 12.7757 568.22 8.96355C579.822 5.15145 591.176 3.24539 602.281 3.24539C610.734 3.24539 618.192 4.15699 624.656 5.98018C631.286 7.80335 637.087 9.79228 642.059 11.9469C647.031 14.1016 651.424 16.0905 655.236 17.9137C659.048 19.7369 662.528 20.6485 665.678 20.6485C667.501 20.6485 668.91 20.0684 669.904 18.9082C671.064 17.748 671.976 16.1734 672.639 14.1845C673.468 12.1956 673.965 10.0409 674.13 7.72048C674.462 5.23432 674.628 2.74817 674.628 0.262017H676.865L679.6 70.6202H677.611C675.954 61.1728 672.722 52.7199 667.915 45.2614C663.109 37.6372 657.225 31.1732 650.263 25.8694C643.468 20.5656 636.009 16.5049 627.888 13.6872C619.767 10.7039 611.562 9.21217 603.275 9.21217C592.336 9.21217 582.723 11.6983 574.436 16.6706C566.148 21.4772 559.187 27.9412 553.552 36.0627C548.082 44.0184 543.939 53.1343 541.121 63.4104C538.469 73.6865 537.143 84.2112 537.143 94.9845C537.143 105.592 538.469 116.034 541.121 126.31C543.939 136.586 548.082 145.785 553.552 153.906C559.187 161.862 566.148 168.326 574.436 173.298C582.723 178.105 592.336 180.508 603.275 180.508C612.557 180.508 620.347 179.514 626.645 177.525C633.109 175.37 638.413 172.718 642.556 169.569C646.7 166.254 649.766 162.691 651.755 158.879C653.91 154.901 655.236 151.006 655.733 147.194V92.747H596.314V87.0288H683.081V182ZM803.875 176.033C809.676 176.033 816.14 175.287 823.267 173.796C830.56 172.138 837.687 169.735 844.648 166.586C851.609 163.437 858.073 159.542 864.04 154.901C870.007 150.094 874.564 144.542 877.714 138.244L879.205 138.741L864.537 182H695.478V180.011C699.788 180.011 703.103 179.182 705.423 177.525C707.743 175.702 709.401 173.298 710.395 170.315C711.556 167.332 712.219 163.768 712.384 159.625C712.55 155.481 712.633 150.923 712.633 145.951V44.0184C712.633 39.2118 712.55 34.7367 712.384 30.5931C712.219 26.4495 711.556 22.886 710.395 19.9026C709.401 16.7535 707.743 14.3502 705.423 12.6928C703.103 10.8696 699.788 9.95802 695.478 9.95802V7.96909H861.056L869.758 41.5322L868.266 42.278C865.117 35.9798 860.808 31.0075 855.338 27.3611C850.034 23.549 844.233 20.6485 837.935 18.6596C831.803 16.6706 825.421 15.4276 818.792 14.9303C812.328 14.2673 806.195 13.9359 800.394 13.9359H801.389H759.87C755.726 13.9359 752.494 14.5988 750.174 15.9248C747.853 17.2507 746.113 19.1568 744.953 21.6429C743.958 24.1291 743.378 27.2782 743.213 31.0903C743.047 34.7367 742.964 39.046 742.964 44.0184V92.0012H810.09C816.388 91.5039 821.609 90.3437 825.753 88.5205C830.062 86.6974 833.46 84.5427 835.946 82.0565C838.432 79.4046 840.173 76.5041 841.167 73.355C842.162 70.0401 842.659 66.8081 842.659 63.659H844.648V126.061H842.659C842.659 122.581 842.079 119.183 840.919 115.868C839.758 112.553 837.687 109.57 834.703 106.918C831.72 104.266 827.742 102.112 822.77 100.454C817.797 98.7967 811.499 97.9679 803.875 97.9679H742.964V176.033H803.875ZM892.11 7.96909H922.441L1044.51 142.719V7.96909H1074.84V182H1044.51L922.441 47.2503V182H892.11V7.96909ZM1245.57 70.6202C1243.74 59.8469 1240.1 50.6481 1234.63 43.0239C1229.32 35.2339 1223.02 28.9357 1215.73 24.1291C1208.44 19.1568 1200.57 15.5933 1192.11 13.4386C1183.66 11.1182 1175.29 9.95802 1167 9.95802C1160.21 9.95802 1153.74 10.7039 1147.61 12.1956C1141.48 13.5215 1136.09 15.5104 1131.45 18.1623C1126.81 20.8142 1123.08 24.0462 1120.26 27.8583C1117.61 31.5047 1116.29 35.6483 1116.29 40.2891C1116.29 46.9189 1118.27 52.3884 1122.25 56.6978C1126.23 61.0071 1131.45 64.6534 1137.92 67.6368C1144.38 70.4545 1151.75 72.9406 1160.04 75.0953C1168.49 77.25 1177.03 79.4046 1185.65 81.5593C1194.27 83.714 1202.72 86.2001 1211.01 89.0178C1219.46 91.8354 1226.92 95.4818 1233.38 99.9569C1239.85 104.266 1245.07 109.653 1249.05 116.117C1253.02 122.415 1255.01 130.205 1255.01 139.487C1255.01 146.779 1252.78 153.409 1248.3 159.376C1243.99 165.343 1238.11 170.398 1230.65 174.542C1223.19 178.685 1214.49 181.834 1204.54 183.989C1194.6 186.309 1184.07 187.47 1172.97 187.47C1164.52 187.47 1156.98 186.558 1150.35 184.735C1143.88 182.912 1138.16 180.923 1133.19 178.768C1128.22 176.613 1123.83 174.624 1120.01 172.801C1116.2 170.978 1112.72 170.066 1109.57 170.066C1106.09 170.066 1103.69 172.221 1102.36 176.53C1101.2 180.674 1100.62 185.315 1100.62 190.453H1098.39L1092.42 119.846H1094.41C1096.23 130.785 1099.96 140.15 1105.59 147.94C1111.4 155.564 1118.11 161.862 1125.73 166.834C1133.52 171.641 1141.81 175.205 1150.59 177.525C1159.54 179.845 1168.25 181.006 1176.7 181.006C1183.83 181.006 1190.62 180.26 1197.09 178.768C1203.55 177.276 1209.27 175.122 1214.24 172.304C1219.21 169.321 1223.11 165.84 1225.92 161.862C1228.91 157.719 1230.4 153.161 1230.4 148.188C1230.4 141.559 1228.49 136.255 1224.68 132.277C1220.87 128.133 1215.81 124.818 1209.52 122.332C1203.38 119.68 1196.34 117.526 1188.38 115.868C1180.43 114.045 1172.22 112.305 1163.77 110.647C1155.48 108.824 1147.36 106.669 1139.41 104.183C1131.45 101.531 1124.32 98.1337 1118.03 93.9901C1111.89 89.6807 1106.92 84.2112 1103.11 77.5815C1099.3 70.9517 1097.39 62.6645 1097.39 52.7199C1097.39 44.4327 1099.38 37.2229 1103.36 31.0903C1107.5 24.7921 1112.97 19.5712 1119.77 15.4276C1126.56 11.284 1134.27 8.21771 1142.89 6.22879C1151.67 4.23986 1160.79 3.24539 1170.24 3.24539C1178.85 3.24539 1186.4 4.15699 1192.86 5.98018C1199.32 7.80335 1205.04 9.79228 1210.01 11.9469C1215.15 14.1016 1219.54 16.0905 1223.19 17.9137C1227 19.7369 1230.48 20.6485 1233.63 20.6485C1237.11 20.6485 1239.52 18.4938 1240.84 14.1845C1242.17 9.87515 1242.83 5.23432 1242.83 0.262017H1244.82L1247.55 70.6202H1245.57ZM1337.47 7.96909H1370.54L1285.51 182H1252.69L1337.47 7.96909Z"
                fill="#DDFF8D"
              />
            </svg>
          </div>
          <div className="mb-[25px]">
            <button
              onClick={() => setTerms(true)}
              className="text-[#9E9E9E] text-[22px]">
              Terms
            </button>
          </div>
        </div>
      </footer>
      <Terms_modal terms={terms} setTerms={setTerms} />
    </>
  )
}

const Terms_modal = ({
  terms,
  setTerms
}: {
  terms: boolean
  setTerms: Dispatch<SetStateAction<boolean>>
}) => {
  if (terms) {
    return (
      <div
        className="fixed inset-0 w-full h-full bg-blue backdrop-blur-lg z-[9999999] overflow-y-auto"
        id="terms-modal">
        <div className="container py-[50px] text-white relative">
          <button
            className="absolute w-4 right-4 top-4"
            onClick={() => setTerms(false)}>
            <svg
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 460.775 460.775"
              fill="#ddff8d">
              <path
                d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
              c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
              c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
              c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
              l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
              c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
              />
            </svg>
          </button>

          <h2 className="text-4xl mb-4">PRIVACY NOTICE</h2>
          <p>
            We are committed to respecting your privacy. This notice is to
            explain how we may use personal information we collect when you:
          </p>
          <ul>
            <li>make an enquiry</li>
            <li>sign up for marketing emails and alerts</li>
            <li>create an account with us</li>
            <li>browse our website</li>
          </ul>
          <p>
            References to <strong>we</strong>, <strong>our</strong> or{' '}
            <strong>us</strong> in this privacy notice are to Eidgensi LTD.
          </p>
          <p>
            Eidgensi LTD is registered in the UK under company number 13760631
            and our registered office is at 1 Paternoster Square, London, EC4M
            7DX, UK.
          </p>

          <h3>1. PERSONAL INFORMATION</h3>

          <ul>
            <li>
              When you browse our website, we may collect certain personal
              information about you, such as your IP address and the pages that
              you visit.
            </li>
            <li>
              If you register to use our website, you will need to provide us
              with additional personal data, including your email address and
              password.
            </li>
            <li>
              Depending on how you use our website, you may need to provide us
              with further personal data. For example, if you use our website to
              stake your tokens, you will need to connect your wallet which will
              provide us with details of the tokens you own and wish to stake.
              If you are required to complete KYC checks, you will need to
              provide information and documentation to our third party KYC
              provider to verify your identity, such as photographic ID, and our
              KYC provider will share this with us. If you make a purchase from
              our Swag Store, you will need to provide your postal address for
              delivery and payment details.
            </li>
            <li>
              Depending on the nature of our interactions with you, there may be
              certain essential personal information that we have to collect
              from you so that we can provide you with the information, goods or
              services that you have requested. This will vary depending on the
              relationship we have with you.
            </li>
            <li>
              We may also ask you for additional personal information which it
              is optional for you to provide but which will allow us to improve
              the service that we provide to you. For example, if you make an
              enquiry we may ask you for more information about you to enable us
              to provide the most appropriate response.
            </li>
            <li>
              We will always aim to make it clear which personal information it
              is necessary for you to provide and which personal information is
              optional. However, if you are unsure as to whether you are
              required to provide any particular piece of personal information
              please ask.
            </li>
          </ul>

          <h3>2. USES MADE OF THE INFORMATION</h3>

          <ul>
            <li>
              We are committed to protecting your privacy, and will only use
              your personal information in accordance with applicable data
              protection legislation, including the UK General Data Protection
              Regulation and the Data Protection Act 2018.
            </li>
            <li>
              Specifically, we may use your personal information as follows:
              <ul>
                <li>
                  to perform our obligations to you, including:
                  <ul>
                    <li>
                      handling any request that you make in respect of the
                      staking of your tokens or a token swap, including creating
                      any smart contract required to give effect to this request
                    </li>
                    <li>
                      fulfilling any order that you place at our Swag Store,
                      including authorising payments, dispatching the ordered
                      merchandise and handling any returns
                    </li>
                  </ul>
                </li>
                <li>
                  where you have expressly consented to us doing so, including:
                  <ul>
                    <li>
                      where you have requested that we keep you up-to-date with
                      news and updates, to provide you with the types of news
                      and updates that you have asked to receive by the types of
                      communication that you have asked us to use
                    </li>
                    <li>
                      where you make an enquiry or request any particular
                      information, to respond to that enquiry and provide the
                      requested information
                    </li>
                  </ul>
                </li>
                <li>
                  where it is necessary for compliance with legal obligations,
                  including:
                  <ul>
                    <li>
                      for record keeping and regulatory compliance purposes
                    </li>
                    <li>for carrying out checks to prevent money laundering</li>
                  </ul>
                </li>
                <li>
                  where we otherwise have a legitimate interest in doing so,
                  including:
                  <ul>
                    <li>
                      carrying out checks to prevent fraud to protect us from
                      dishonest activity
                    </li>
                    <li>
                      undertaking surveys or market research to enable us to
                      improve the service we offer
                    </li>
                    <li>
                      ensuring that our website is presented in the most
                      effective manner for you and your computer and tracking
                      your use of our website to help us to provide a positive
                      user experience and improve and increase usage of our
                      website.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Where you have given us your consent to use your personal
              information in a particular manner, you have the right to withdraw
              this consent at any time, which you may do by contacting us as
              described in paragraph 11. Please note however that the withdrawal
              of your consent will not affect any use of your personal
              information made before you withdrew your consent.
            </li>
          </ul>

          <h3>3. SHARING OF YOUR PERSONAL INFORMATION WITHIN OUR GROUP</h3>

          <ul>
            <li>
              Our group consists of various companies which are under the same
              ultimate ownership as us. Where you provide personal information
              to one company within our group it may be shared with other
              companies within our group. This is in our legitimate interests to
              enable us to operate our group effectively and to enable us to
              provide you with an efficient service.
            </li>
            <li>All members of our group are bound by this privacy notice.</li>
          </ul>

          <h3>
            4. OTHER CIRCUMSTANCES IN WHICH WE MAY SHARE YOUR PERSONAL
            INFORMATION
          </h3>

          <ul>
            <li>
              We may share your personal information with:
              <ul>
                <li>
                  providers of outsourced services, such as hosting and IT
                  support or maintenance services (to the extent necessary for
                  the provider to provide those outsourced services to us)
                </li>
                <li>the provider of your cryptocurrency wallet</li>
                <li>
                  providers of our know-your-customer / anti-money-laundering
                  checks
                </li>
                <li>
                  he prospective seller or buyer of any business or assets in
                  the event that we sell or buy any business or assets
                </li>
              </ul>
            </li>
            <li>
              We may also share your personal information with third parties if
              we are under a duty to share your personal information in order to
              comply with any legal obligation, or in order to enforce or apply
              such other terms as apply to our relationship, or to protect the
              rights, property, or safety of our customers, ourselves or others
            </li>
            <li>
              We may share anonymised and aggregated information about our
              customers to third parties, such as advertisers, to allow them to
              select and send relevant adverts to our customers. We may also use
              such anonymised aggregate information to help advertisers reach
              the kind of audience they want to target.
            </li>
          </ul>

          <h3>5. TRANSFERRING YOUR PERSONAL INFORMATION INTERNATIONALLY</h3>

          <ul>
            <li>
              We will not transfer any of your personal data outside of the UK
              or EEA.
            </li>
          </ul>

          <h3>
            6. RETENTION, UPDATING AND REMOVAL OF YOUR PERSONAL INFORMATION
          </h3>

          <ul>
            <li>
              Where you provide us with personal information we may retain this
              information for future use, including providing you with news and
              updates of a type you have asked to receive; monitoring fraud and
              other illegal or unlawful activity; and record keeping purposes.
            </li>
            <li>
              The duration for which we retain your personal information will
              differ depending on the type of information and the reason why we
              collected it from you. However, in some cases personal information
              may be retained on a long term basis: for example, personal
              information that we need to retain for legal purposes will
              normally be retained for at least six years in accordance with
              usual commercial practice and regulatory requirements.
            </li>
            <li>
              It is important to ensure that the personal information we hold
              about you is accurate and up-to-date, and you should let us know
              if anything changes, for example if you change your email address.
              If it exists, you may be able to update some of the personal
              information we hold about you through the “Your Account” section
              of the website. Alternatively, you can contact us using the
              details in paragraph 11.
            </li>
            <li>
              If you want to stop receiving any information from us, such as
              news and updates, please let us know by contacting us using the
              details in paragraph 11. It may take up to one month to
              unsubscribe you from marketing.
            </li>
            <li>
              Your decision to stop receiving information from us may result in
              the deletion of some of the personal information that we hold
              about you, but we may still retain personal information we require
              for other purposes, including where it is required for record
              keeping purposes.
            </li>
            <li>
              In certain circumstances you may be entitled to request the
              erasure of personal information that we hold about you. To make a
              request of this nature, please contact us, providing full details
              of the personal information you want to be erased and the
              reason(s) for your request. We will consider all requests upon
              receipt and confirm to you whether we are able to agree to your
              request.
            </li>
          </ul>

          <h3>7. COOKIES AND LOG FILES</h3>

          <ul>
            <li>
              When you browse our website, we may use “cookies” to keep track of
              your visit and give you a better browsing experience. Where
              required by law, we will request your consent or offer an opt-out.
            </li>

            <li>
              In common with most websites, our website logs various information
              about visitors, including internet protocol (IP) addresses,
              browser type, internet service provider (ISP) information,
              referring / exit pages and date / time stamp. We may use this
              information to analyse trends, administer the website, track your
              movement around the website and gather broad demographic
              information.
            </li>
          </ul>

          <h3>8. SECURITY</h3>

          <ul>
            <li>
              The protection of your personal information is very important to
              us and we have in place various security measures to ensure that
              your personal information is kept secure.
            </li>
            <li>
              However, you should be aware that the method you use to get in
              contact with us, such as email or post, may not be entirely secure
              and your personal information may be susceptible to being
              intercepted in transit. Equally, your personal information is at
              risk if a malicious third party gains access to your account on
              our website or to any other place where your personal information
              is stored, such as your email account.
            </li>
            <li>
              You should therefore take all reasonable steps to keep your
              personal information secure, including choosing a secure password
              for your customer account on our website and your email account
              and not disclosing your passwords to anybody else. You should use
              a unique password for every account.
            </li>
          </ul>

          <h3>9.ENQUIRIES, ISSUES AND COMPLAINTS</h3>

          <ul>
            <li>
              You are entitled by law to ask for a copy of your personal
              information at any time. Please contact us using the details in
              paragraph 11.
            </li>
            <li>
              In the unlikely event that you have any concerns about how we use
              your personal information, please contact us as described in
              paragraph 11. This includes situations where you want to request
              the rectification or erasure of your personal information,
              restrictions to be placed around how we use your personal
              information, or to object to a particular use.
            </li>
            <li>
              If we are unable to resolve your complaint, you may make a
              complaint to the Information Commissioner’s Office. Please see{' '}
              <a href="https://ico.org.uk/make-a-complaint/" target="_blank">
                link
              </a>{' '}
              for more information.
            </li>
          </ul>

          <h3>10. CHANGES TO THIS PRIVACY NOTICE</h3>

          <ul>
            <li>
              We reserve the right to alter this privacy notice at any time.
              Such alterations will be posted on our website. You can also
              obtain an up-to-date copy of our privacy notice by contacting us
              as described in paragraph 11. Should you object to any alteration,
              please contact us.
            </li>
          </ul>

          <h3>10. CONTACTING US</h3>

          <ul>
            <li>
              If you have an enquiry or concerns in respect of our use of your
              personal data please contact our legal department at
              legal@alkimiexchange.com.
            </li>
          </ul>

          <h3>11. FURTHER INFORMATION</h3>

          <ul>
            <li>
              We hope that the contents of this privacy notice address any
              queries that you may have about the personal information we may
              hold about you and what we may do with it. However, if you do have
              any further queries, comments or requests, please contact us as
              described in paragraph 11 above.
            </li>

            <li>
              Whilst this privacy notice sets out a general summary of your
              legal rights in respect of personal information, this is a very
              complex area of law. For example, more information about your
              legal rights can be found on the Information Commissioner’s
              website at{' '}
              <a href="https://ico.org.uk/your-data-matters/" target="_blank">
                link
              </a>{' '}
              .
            </li>
          </ul>

          <button
            onClick={() => setTerms(false)}
            className="bg-primary px-24 lg:px-36 pb-1.5 text-32x rounded-3xl text-black block mt-10 text-center lg:inline-block lg:mx-auto">
            close
          </button>
        </div>
        <div className="container">
          <svg
            viewBox="0 0 1371 191"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M155.28 155.895V182H0.143401V7.96909H153.788V34.0737H30.4745V81.8079H136.882V107.913H30.4745V155.895H155.28ZM236.825 7.96909V9.95802C232.682 9.95802 229.45 10.8696 227.129 12.6928C224.809 14.3502 223.069 16.7535 221.908 19.9026C220.914 22.886 220.334 26.4495 220.168 30.5931C220.002 34.7367 219.92 39.2118 219.92 44.0184V145.951C219.92 150.923 220.002 155.481 220.168 159.625C220.334 163.768 220.914 167.332 221.908 170.315C223.069 173.298 224.809 175.702 227.129 177.525C229.45 179.182 232.682 180.011 236.825 180.011V182H172.434V180.011C176.743 180.011 180.058 179.182 182.379 177.525C184.699 175.702 186.356 173.298 187.351 170.315C188.511 167.332 189.174 163.768 189.34 159.625C189.506 155.481 189.588 150.923 189.588 145.951V44.0184C189.588 39.046 189.506 34.4881 189.34 30.3445C189.174 26.2009 188.511 22.6374 187.351 19.654C186.356 16.6706 184.699 14.3502 182.379 12.6928C180.058 10.8696 176.743 9.95802 172.434 9.95802V7.96909H236.825ZM419.626 7.96909C433.217 8.13483 444.819 9.62652 454.432 12.4442C464.211 15.2618 472.167 19.0739 478.299 23.8805C484.597 28.6871 489.238 34.3223 492.222 40.7864C495.205 47.2504 496.697 54.1287 496.697 61.4214C496.697 72.029 493.879 83.2167 488.244 94.9845C482.94 105.758 475.399 116.365 465.62 126.807C456.007 137.083 444.57 146.282 431.311 154.404C418.217 162.525 403.466 169.155 387.057 174.293C370.814 179.265 353.411 181.834 334.848 182H243.606L244.6 180.011C248.91 180.011 252.556 179.182 255.54 177.525C258.689 175.702 261.506 173.298 263.992 170.315C266.479 167.332 268.799 163.768 270.954 159.625C273.274 155.481 275.595 150.923 277.915 145.951L327.638 44.0184C330.456 38.5488 332.776 33.5765 334.599 29.1014C336.588 24.4606 337.583 20.6485 337.583 17.6651C337.583 15.3447 336.837 13.5215 335.345 12.1956C333.853 10.7039 331.202 9.95802 327.389 9.95802L328.384 7.96909H419.626ZM296.561 175.785H336.588C349.185 175.785 361.367 173.464 373.135 168.823C384.903 164.183 395.759 158.05 405.703 150.426C415.648 142.802 424.515 134.183 432.305 124.57C440.261 114.957 446.725 105.095 451.697 94.9845C458.493 81.3936 461.89 68.4656 461.89 56.2005C461.89 50.2337 460.979 44.6813 459.156 39.5433C457.333 34.4052 454.515 30.013 450.703 26.3666C447.056 22.5545 442.25 19.5711 436.283 17.4165C430.482 15.2618 423.521 14.1016 415.399 13.9359H391.035C387.057 13.9359 383.659 14.5988 380.842 15.9248C378.19 17.2507 375.704 19.1568 373.383 21.6429C371.229 24.1291 369.157 27.2782 367.168 31.0903C365.179 34.7367 363.024 39.046 360.704 44.0184L296.561 175.785ZM683.081 182H680.097C680.097 173.713 678.523 166.834 675.374 161.365C672.224 155.73 667.501 152.249 661.202 150.923C660.042 155.564 657.888 160.039 654.738 164.348C651.589 168.658 647.529 172.47 642.556 175.785C637.75 179.099 631.949 181.751 625.153 183.74C618.358 185.729 610.734 186.724 602.281 186.724C591.01 186.724 579.574 184.818 567.972 181.006C556.535 177.193 546.093 171.475 536.646 163.851C527.364 156.227 519.74 146.697 513.773 135.26C507.807 123.658 504.823 110.233 504.823 94.9845C504.823 79.7361 507.807 66.3938 513.773 54.9574C519.74 43.3554 527.364 33.7422 536.646 26.118C546.093 18.4938 556.618 12.7757 568.22 8.96355C579.822 5.15145 591.176 3.24539 602.281 3.24539C610.734 3.24539 618.192 4.15699 624.656 5.98018C631.286 7.80335 637.087 9.79228 642.059 11.9469C647.031 14.1016 651.424 16.0905 655.236 17.9137C659.048 19.7369 662.528 20.6485 665.678 20.6485C667.501 20.6485 668.91 20.0684 669.904 18.9082C671.064 17.748 671.976 16.1734 672.639 14.1845C673.468 12.1956 673.965 10.0409 674.13 7.72048C674.462 5.23432 674.628 2.74817 674.628 0.262017H676.865L679.6 70.6202H677.611C675.954 61.1728 672.722 52.7199 667.915 45.2614C663.109 37.6372 657.225 31.1732 650.263 25.8694C643.468 20.5656 636.009 16.5049 627.888 13.6872C619.767 10.7039 611.562 9.21217 603.275 9.21217C592.336 9.21217 582.723 11.6983 574.436 16.6706C566.148 21.4772 559.187 27.9412 553.552 36.0627C548.082 44.0184 543.939 53.1343 541.121 63.4104C538.469 73.6865 537.143 84.2112 537.143 94.9845C537.143 105.592 538.469 116.034 541.121 126.31C543.939 136.586 548.082 145.785 553.552 153.906C559.187 161.862 566.148 168.326 574.436 173.298C582.723 178.105 592.336 180.508 603.275 180.508C612.557 180.508 620.347 179.514 626.645 177.525C633.109 175.37 638.413 172.718 642.556 169.569C646.7 166.254 649.766 162.691 651.755 158.879C653.91 154.901 655.236 151.006 655.733 147.194V92.747H596.314V87.0288H683.081V182ZM803.875 176.033C809.676 176.033 816.14 175.287 823.267 173.796C830.56 172.138 837.687 169.735 844.648 166.586C851.609 163.437 858.073 159.542 864.04 154.901C870.007 150.094 874.564 144.542 877.714 138.244L879.205 138.741L864.537 182H695.478V180.011C699.788 180.011 703.103 179.182 705.423 177.525C707.743 175.702 709.401 173.298 710.395 170.315C711.556 167.332 712.219 163.768 712.384 159.625C712.55 155.481 712.633 150.923 712.633 145.951V44.0184C712.633 39.2118 712.55 34.7367 712.384 30.5931C712.219 26.4495 711.556 22.886 710.395 19.9026C709.401 16.7535 707.743 14.3502 705.423 12.6928C703.103 10.8696 699.788 9.95802 695.478 9.95802V7.96909H861.056L869.758 41.5322L868.266 42.278C865.117 35.9798 860.808 31.0075 855.338 27.3611C850.034 23.549 844.233 20.6485 837.935 18.6596C831.803 16.6706 825.421 15.4276 818.792 14.9303C812.328 14.2673 806.195 13.9359 800.394 13.9359H801.389H759.87C755.726 13.9359 752.494 14.5988 750.174 15.9248C747.853 17.2507 746.113 19.1568 744.953 21.6429C743.958 24.1291 743.378 27.2782 743.213 31.0903C743.047 34.7367 742.964 39.046 742.964 44.0184V92.0012H810.09C816.388 91.5039 821.609 90.3437 825.753 88.5205C830.062 86.6974 833.46 84.5427 835.946 82.0565C838.432 79.4046 840.173 76.5041 841.167 73.355C842.162 70.0401 842.659 66.8081 842.659 63.659H844.648V126.061H842.659C842.659 122.581 842.079 119.183 840.919 115.868C839.758 112.553 837.687 109.57 834.703 106.918C831.72 104.266 827.742 102.112 822.77 100.454C817.797 98.7967 811.499 97.9679 803.875 97.9679H742.964V176.033H803.875ZM892.11 7.96909H922.441L1044.51 142.719V7.96909H1074.84V182H1044.51L922.441 47.2503V182H892.11V7.96909ZM1245.57 70.6202C1243.74 59.8469 1240.1 50.6481 1234.63 43.0239C1229.32 35.2339 1223.02 28.9357 1215.73 24.1291C1208.44 19.1568 1200.57 15.5933 1192.11 13.4386C1183.66 11.1182 1175.29 9.95802 1167 9.95802C1160.21 9.95802 1153.74 10.7039 1147.61 12.1956C1141.48 13.5215 1136.09 15.5104 1131.45 18.1623C1126.81 20.8142 1123.08 24.0462 1120.26 27.8583C1117.61 31.5047 1116.29 35.6483 1116.29 40.2891C1116.29 46.9189 1118.27 52.3884 1122.25 56.6978C1126.23 61.0071 1131.45 64.6534 1137.92 67.6368C1144.38 70.4545 1151.75 72.9406 1160.04 75.0953C1168.49 77.25 1177.03 79.4046 1185.65 81.5593C1194.27 83.714 1202.72 86.2001 1211.01 89.0178C1219.46 91.8354 1226.92 95.4818 1233.38 99.9569C1239.85 104.266 1245.07 109.653 1249.05 116.117C1253.02 122.415 1255.01 130.205 1255.01 139.487C1255.01 146.779 1252.78 153.409 1248.3 159.376C1243.99 165.343 1238.11 170.398 1230.65 174.542C1223.19 178.685 1214.49 181.834 1204.54 183.989C1194.6 186.309 1184.07 187.47 1172.97 187.47C1164.52 187.47 1156.98 186.558 1150.35 184.735C1143.88 182.912 1138.16 180.923 1133.19 178.768C1128.22 176.613 1123.83 174.624 1120.01 172.801C1116.2 170.978 1112.72 170.066 1109.57 170.066C1106.09 170.066 1103.69 172.221 1102.36 176.53C1101.2 180.674 1100.62 185.315 1100.62 190.453H1098.39L1092.42 119.846H1094.41C1096.23 130.785 1099.96 140.15 1105.59 147.94C1111.4 155.564 1118.11 161.862 1125.73 166.834C1133.52 171.641 1141.81 175.205 1150.59 177.525C1159.54 179.845 1168.25 181.006 1176.7 181.006C1183.83 181.006 1190.62 180.26 1197.09 178.768C1203.55 177.276 1209.27 175.122 1214.24 172.304C1219.21 169.321 1223.11 165.84 1225.92 161.862C1228.91 157.719 1230.4 153.161 1230.4 148.188C1230.4 141.559 1228.49 136.255 1224.68 132.277C1220.87 128.133 1215.81 124.818 1209.52 122.332C1203.38 119.68 1196.34 117.526 1188.38 115.868C1180.43 114.045 1172.22 112.305 1163.77 110.647C1155.48 108.824 1147.36 106.669 1139.41 104.183C1131.45 101.531 1124.32 98.1337 1118.03 93.9901C1111.89 89.6807 1106.92 84.2112 1103.11 77.5815C1099.3 70.9517 1097.39 62.6645 1097.39 52.7199C1097.39 44.4327 1099.38 37.2229 1103.36 31.0903C1107.5 24.7921 1112.97 19.5712 1119.77 15.4276C1126.56 11.284 1134.27 8.21771 1142.89 6.22879C1151.67 4.23986 1160.79 3.24539 1170.24 3.24539C1178.85 3.24539 1186.4 4.15699 1192.86 5.98018C1199.32 7.80335 1205.04 9.79228 1210.01 11.9469C1215.15 14.1016 1219.54 16.0905 1223.19 17.9137C1227 19.7369 1230.48 20.6485 1233.63 20.6485C1237.11 20.6485 1239.52 18.4938 1240.84 14.1845C1242.17 9.87515 1242.83 5.23432 1242.83 0.262017H1244.82L1247.55 70.6202H1245.57ZM1337.47 7.96909H1370.54L1285.51 182H1252.69L1337.47 7.96909Z"
              fill="#DDFF8D"
            />
          </svg>
        </div>
      </div>
    )
  }
  return null
}

export default Footer
