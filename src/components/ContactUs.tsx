import { relative } from 'path'
import React, { FC, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

interface Props {
  background: string
}

const Contact_us: FC<Props> = ({background}) => {
  const [formClass, setFormClass] = useState('right-0 opacity-100')
  const [confirmationClass, setConfirmationClass] = useState('hidden right-10')

  const form = useRef(null as null | HTMLFormElement)

  const [name, setName] = useState({
    value: '',
    error: false,
    errorMessage: ''
  })
  const [email, setEmail] = useState({
    value: '',
    error: false,
    errorMessage: ''
  })
  const [message, setMessage] = useState({
    value: '',
    error: false,
    errorMessage: ''
  })

  const [errorMessage, setErrorMessage] = useState('')

  const hanleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let valid = true

    if (name.value === '') {
      setName({ ...name, error: true, errorMessage: 'Name is required' })
      valid = false
    } else {
      setName({ ...name, error: false, errorMessage: '' })
    }

    if (email.value === '') {
      setEmail({ ...email, error: true, errorMessage: 'Email is required' })
      valid = false
    } else if (!email.value.includes('@')) {
      setEmail({ ...email, error: true, errorMessage: 'Invalid email' })
      valid = false
    } else {
      setEmail({ ...email, error: false, errorMessage: '' })
    }

    if (message.value === '') {
      setMessage({
        ...message,
        error: true,
        errorMessage: 'Message is required'
      })
      valid = false
    } else {
      setMessage({ ...message, error: false, errorMessage: '' })
    }

    if (!valid) return

    emailjs
      .sendForm(
        'service_ofs351b',
        'template_m86fh8g',
        form.current || '',
        'gTNhpyTcoVz126WRU'
      )
      .then(
        (result) => {
          setName({ ...name, value: '' })
          setEmail({ ...email, value: '' })
          setMessage({ ...message, value: '' })
          setFormClass('right-10 opacity-0')
          setTimeout(() => setFormClass('hidden'), 500)
          setTimeout(() => setConfirmationClass('right-0 opacity-100'), 500)
        },
        (error) => {
          console.log('error', error)
          setErrorMessage('Something went wrong, please try again later')
          setTimeout(() => setErrorMessage(''), 5000)
        }
      )
  }

  return (
    <section id="lets-talk" className={`text-white ${background}`}>
      <div className="container pt-16 pb-20 lg:pt-32 lg:pb-36 flex flex-col">
        <div className="lg:grid lg:grid-cols-2 gap-24">
          <div>
            <svg className="pr-10" viewBox="0 0 283 147" fill="none">
              <path
                d="M61.6237 55.5952V65H6.89684V2.30143H17.8243V55.5952H61.6237ZM101.551 62.8503C103.641 62.8503 105.97 62.5816 108.538 62.0442C111.165 61.4471 113.733 60.5812 116.241 59.4467C118.749 58.3122 121.078 56.9089 123.227 55.2369C125.377 53.5053 127.019 51.5049 128.153 49.2358L128.691 49.4149L123.406 65H62.4991V64.2834C64.0517 64.2834 65.2459 63.9849 66.0819 63.3878C66.9179 62.7309 67.515 61.8651 67.8733 60.7902C68.2913 59.7154 68.5301 58.4316 68.5899 56.9388C68.6496 55.4459 68.6794 53.8038 68.6794 52.0124V15.289C68.6794 13.5573 68.6496 11.9451 68.5899 10.4522C68.5301 8.95943 68.2913 7.6756 67.8733 6.60077C67.515 5.46622 66.9179 4.60038 66.0819 4.00325C65.2459 3.34641 64.0517 3.01799 62.4991 3.01799V2.30143H122.152L125.287 14.3933L124.75 14.662C123.615 12.3929 122.063 10.6015 120.092 9.28785C118.181 7.91445 116.091 6.86947 113.822 6.15292C111.613 5.43636 109.314 4.98852 106.926 4.80938C104.597 4.57052 102.387 4.4511 100.297 4.4511H100.656H85.6976C84.2048 4.4511 83.0404 4.68995 82.2044 5.16765C81.3684 5.64536 80.7414 6.33206 80.3234 7.22775C79.9652 8.12344 79.7562 9.25799 79.6965 10.6314C79.6367 11.9451 79.6069 13.4976 79.6069 15.289V32.5759H103.791C106.06 32.3967 107.941 31.9788 109.433 31.3219C110.986 30.6651 112.21 29.8888 113.106 28.9931C114.002 28.0377 114.629 26.9927 114.987 25.8582C115.345 24.6639 115.524 23.4995 115.524 22.365H116.241V44.8469H115.524C115.524 43.5929 115.315 42.3688 114.897 41.1745C114.479 39.9803 113.733 38.9055 112.658 37.95C111.583 36.9946 110.15 36.2184 108.359 35.6212C106.567 35.0241 104.298 34.7255 101.551 34.7255H79.6069V62.8503H101.551ZM198.994 2.30143V11.5271H169.437V65H158.42V11.5271H128.951V2.30143H198.994ZM206.867 2.30143H215.913L207.762 20.8423H202.12L206.867 2.30143ZM275.973 18.2448C274.779 17.1102 273.256 16.0951 271.405 15.1994C269.614 14.244 267.643 13.4379 265.493 12.7811C263.403 12.1242 261.194 11.6166 258.865 11.2584C256.536 10.9001 254.267 10.721 252.058 10.721C249.908 10.721 247.848 10.9001 245.878 11.2584C243.967 11.6166 242.265 12.1839 240.772 12.9602C239.339 13.6767 238.175 14.6322 237.279 15.8264C236.443 17.0207 236.025 18.4239 236.025 20.0362C236.025 21.7678 236.682 23.1711 237.996 24.2459C239.369 25.2611 241.131 26.097 243.28 26.7539C245.43 27.351 247.878 27.8884 250.625 28.3661C253.431 28.7841 256.298 29.2618 259.224 29.7992C262.15 30.2769 264.986 30.9039 267.733 31.6802C270.539 32.4565 273.017 33.5313 275.167 34.9047C277.317 36.2184 279.048 37.9202 280.362 40.0101C281.735 42.1001 282.422 44.7275 282.422 47.8922C282.422 51.2362 281.586 54.1322 279.914 56.5805C278.302 58.969 276.122 60.9395 273.376 62.4921C270.629 64.0446 267.464 65.1791 263.881 65.8957C260.358 66.6122 256.686 66.9705 252.864 66.9705C249.819 66.9705 246.773 66.7317 243.728 66.254C240.683 65.836 237.757 65.209 234.95 64.373C232.203 63.537 229.666 62.5219 227.337 61.3277C225.068 60.0737 223.127 58.7003 221.515 57.2075L227.695 48.6984C228.889 49.9523 230.442 51.0869 232.353 52.102C234.323 53.1171 236.473 53.983 238.802 54.6995C241.131 55.4161 243.579 55.9833 246.146 56.4013C248.714 56.7596 251.222 56.9388 253.67 56.9388C255.939 56.9388 258.089 56.7596 260.119 56.4013C262.209 56.0431 264.03 55.5056 265.583 54.7891C267.136 54.0725 268.36 53.147 269.255 52.0124C270.211 50.8779 270.688 49.5344 270.688 47.9818C270.688 46.1307 270.032 44.6678 268.718 43.5929C267.404 42.4584 265.643 41.5627 263.433 40.9058C261.284 40.1893 258.806 39.622 255.999 39.204C253.252 38.7263 250.416 38.2486 247.49 37.7709C244.624 37.2335 241.787 36.5767 238.981 35.8004C236.234 35.0241 233.756 33.9791 231.547 32.6655C229.397 31.3518 227.665 29.6798 226.352 27.6496C225.038 25.5596 224.381 22.9621 224.381 19.857C224.381 16.4534 225.127 13.5275 226.62 11.0792C228.173 8.63101 230.203 6.66048 232.711 5.16765C235.279 3.61512 238.205 2.48058 241.489 1.76402C244.773 1.04746 248.207 0.689185 251.789 0.689185C254.656 0.689185 257.522 0.898181 260.388 1.31617C263.254 1.73416 266.001 2.33129 268.628 3.10756C271.256 3.88383 273.704 4.83923 275.973 5.97378C278.242 7.10832 280.213 8.3623 281.885 9.73569L275.973 18.2448ZM68.6997 84.3014L71.9242 98.6325L71.3868 98.9012C70.2523 96.6919 68.7594 94.8109 66.9083 93.2584C65.1169 91.7058 63.1464 90.4519 60.9967 89.4965C58.8471 88.4813 56.6078 87.7349 54.279 87.2572C52.01 86.7795 49.8304 86.5108 47.7405 86.4511H41.7393V134.012C41.7393 135.804 41.7692 137.446 41.8289 138.939C41.8886 140.432 42.0976 141.715 42.4559 142.79C42.8739 143.865 43.5009 144.731 44.3368 145.388C45.1728 145.985 46.3372 146.283 47.83 146.283V147H24.6316V146.283C26.1841 146.283 27.3485 145.985 28.1248 145.388C28.9608 144.731 29.5579 143.865 29.9162 142.79C30.3342 141.715 30.573 140.432 30.6327 138.939C30.6924 137.446 30.7223 135.804 30.7223 134.012V86.3615V86.4511H24.6316C22.6013 86.5108 20.4218 86.7795 18.093 87.2572C15.7642 87.7349 13.525 88.4813 11.3753 89.4965C9.22565 90.4519 7.22526 91.7058 5.37416 93.2584C3.58278 94.8109 2.14967 96.6919 1.07483 98.9012L0.537416 98.6325L3.67234 84.3014H68.6997ZM94.7672 83.4057H105.695L137.581 147H125.937L120.742 136.789H79.7195L74.5245 147H62.9701L94.7672 83.4057ZM84.4667 127.384H115.995L100.231 96.3933L84.4667 127.384ZM198.738 137.595V147H144.011V84.3014H154.939V137.595H198.738ZM222.812 84.3014V85.018C221.319 85.018 220.155 85.3464 219.319 86.0033C218.483 86.6004 217.856 87.4364 217.438 88.5112C217.08 89.586 216.871 90.8699 216.811 92.3627C216.751 93.8555 216.721 95.4976 216.721 97.289V125.772L245.921 97.3786C247.653 95.7066 249.026 94.0645 250.041 92.4522C251.056 90.84 251.564 89.4367 251.564 88.2425C251.564 87.2274 251.146 86.4511 250.31 85.9137C249.474 85.3166 248.101 85.018 246.19 85.018V84.3014H271.269V85.018C270.254 85.018 268.851 85.3166 267.059 85.9137C265.328 86.4511 263.387 87.3169 261.237 88.5112C259.088 89.6457 256.789 91.0789 254.341 92.8105C251.952 94.5422 249.593 96.5724 247.265 98.9012L233.471 112.516L255.326 133.027C257.117 134.699 258.879 136.341 260.61 137.953C262.342 139.506 263.984 140.909 265.537 142.163C267.149 143.417 268.612 144.432 269.926 145.209C271.299 145.925 272.493 146.283 273.508 146.283V147H247.086V146.283C248.519 146.283 249.534 146.134 250.131 145.836C250.728 145.537 251.027 145.119 251.027 144.582C251.027 143.984 250.698 143.298 250.041 142.522C249.444 141.686 248.698 140.79 247.802 139.834L226.395 119.502L216.721 128.997V134.012C216.721 135.804 216.751 137.446 216.811 138.939C216.871 140.432 217.08 141.715 217.438 142.79C217.856 143.865 218.483 144.731 219.319 145.388C220.155 145.985 221.319 146.283 222.812 146.283V147H199.614V146.283C201.166 146.283 202.361 145.985 203.197 145.388C204.032 144.731 204.63 143.865 204.988 142.79C205.406 141.715 205.645 140.432 205.704 138.939C205.764 137.446 205.794 135.804 205.794 134.012V97.289C205.794 95.4976 205.764 93.8555 205.704 92.3627C205.645 90.8699 205.406 89.586 204.988 88.5112C204.63 87.4364 204.032 86.6004 203.197 86.0033C202.361 85.3464 201.166 85.018 199.614 85.018V84.3014H222.812Z"
                fill="#F9FAF4"
              />
            </svg>
            <p className="text-24x lg:text-32x mt-10 mb-10">
              Interested in hearing more about how we can partner with you for
              your next big transformation?
            </p>
          </div>
          <form
            ref={form}
            onSubmit={hanleFormSubmit}
            className={`flex flex-col gap-8 relative ${formClass} transition-all ease-in-out duration-500`}>
            <fieldset className="primary-fieldset">
              <label className="primary-input-label " htmlFor="fullName">
                Full Name
              </label>
              <input
                className="primary-input"
                data-error={name.error ? 'true' : 'false'}
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={(e) =>
                  setName({
                    error: false,
                    errorMessage: '',
                    value: e.target.value
                  })
                }
                value={name.value}
              />
              <span className="error-message">{name.errorMessage}</span>
            </fieldset>
            <fieldset className="primary-fieldset group">
              <label className="primary-input-label" htmlFor="email">
                Email
              </label>
              <input
                className="primary-input"
                type="mail"
                data-error={name.error ? 'true' : 'false'}
                name="email"
                placeholder="Email"
                onChange={(e) =>
                  setEmail({
                    error: false,
                    errorMessage: '',
                    value: e.target.value
                  })
                }
                value={email.value}
              />
              <span className="error-message">{email.errorMessage}</span>
            </fieldset>
            <fieldset className="primary-fieldset group">
              <label className="primary-input-label" htmlFor="message">
                Message
              </label>
              <textarea
                onChange={(e) =>
                  setMessage({
                    error: false,
                    errorMessage: '',
                    value: e.target.value
                  })
                }
                value={message.value}
                data-error={name.error ? 'true' : 'false'}
                className="primary-input"
                name="message"
                placeholder="Message"
              />
              <span className="error-message">{message.errorMessage}</span>
            </fieldset>

            <div className="relative">
              <span className="error-message">{errorMessage}</span>
            </div>

            <button className="secondary-btn " type="submit">
              Let's Talk
            </button>
          </form>
          <div
            className={`flex flex-col justify-center items-center 
          ${confirmationClass} 
          transition-all ease-in-out duration-500`}>
            <svg width="190" height="189" viewBox="0 0 190 189" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M175.671 42.8032C178.125 44.9512 178.374 48.6826 176.226 51.1374L93.5387 145.637C92.4622 146.868 90.9241 147.597 89.2903 147.651C87.6565 147.705 86.0733 147.08 84.9174 145.924L49.4799 110.487C47.1734 108.18 47.1734 104.441 49.4799 102.134C51.7864 99.8277 55.5261 99.8277 57.8326 102.134L88.8061 133.108L167.336 43.3588C169.484 40.904 173.216 40.6552 175.671 42.8032Z"
                fill="#DDFF8D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0424 102.136C16.3489 99.8296 20.0886 99.8296 22.3951 102.136L57.8326 137.574C60.1391 139.88 60.1391 143.62 57.8326 145.926C55.5261 148.233 51.7864 148.233 49.4799 145.926L14.0424 110.489C11.7359 108.182 11.7359 104.443 14.0424 102.136Z"
                fill="#DDFF8D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M140.225 42.7962C142.684 44.9397 142.939 48.6706 140.796 51.1293L90.5927 108.715C88.4491 111.174 84.7183 111.43 82.2595 109.286C79.8008 107.143 79.5452 103.412 81.6887 100.953L131.892 43.3669C134.035 40.9082 137.766 40.6526 140.225 42.7962Z"
                fill="#DDFF8D"
              />
            </svg>

            <h4 className="text-primary text-base	 secondary-font uppercase">
              Your message has been sent
            </h4>
            <p className="text-xl font-medium">We'll be in touch</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact_us
