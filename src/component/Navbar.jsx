import React from "react";
import Logo from "../img/hugeicons_ticket.svg";

const Navbar = () => {
  return (
    <nav className="mt-6 w-full max-w-[1150px] flex items-center justify-between py-3 px-4 rounded-lg lg:rounded-3xl border border-[#0e464f]">
      <div className="flex items-center gap-2">
        <span className="p-1.5 bg-[#0E464F] inline-flex rounded-lg">
          <img src={Logo} alt="Ticket Event Generator Logo" />
        </span>
        <div data-svg-wrapper>
          <svg
            width="47"
            height="26"
            viewBox="0 0 47 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_4018_284"
              maskUnits="userSpaceOnUse"
              x="-0.5"
              y="-0.312"
              width="47"
              height="26"
              fill="black"
            >
              <rect fill="white" x="-0.5" y="-0.312" width="47" height="26" />
              <path d="M8.572 23.992C8.252 23.992 7.81467 23.8747 7.26 23.64C6.70533 23.384 6.14 23.064 5.564 22.68C4.988 22.2747 4.49733 21.8587 4.092 21.432C3.68667 20.984 3.484 20.5573 3.484 20.152C3.484 19.9173 3.49467 19.672 3.516 19.416C3.53733 19.16 3.56933 18.8293 3.612 18.424C3.65467 17.9973 3.68667 17.432 3.708 16.728C3.72933 16.024 3.74 15.1067 3.74 13.976C3.74 13.5493 3.74 13.1013 3.74 12.632C3.74 12.1627 3.72933 11.672 3.708 11.16H3.132L1.5 9.016L1.724 8.504C2.85467 8.376 3.56933 8.03467 3.868 7.48C4.16667 6.92533 4.316 6.08267 4.316 4.952L4.86 4.76L6.812 6.232C6.812 6.616 6.812 6.98933 6.812 7.352C6.812 7.71467 6.812 8.07733 6.812 8.44H9.532L11.132 10.68L10.908 11.16H6.844C6.844 11.928 6.844 12.664 6.844 13.368C6.844 14.072 6.844 14.744 6.844 15.384C6.844 16.6213 6.82267 17.5707 6.78 18.232C6.75867 18.8933 6.72667 19.384 6.684 19.704C6.64133 20.024 6.62 20.3227 6.62 20.6C6.62 21.0267 6.844 21.24 7.292 21.24C7.676 21.24 8.092 21.144 8.54 20.952C8.988 20.7387 9.404 20.4827 9.788 20.184H10.236L11.74 22.68C11.4413 23.0427 10.972 23.352 10.332 23.608C9.692 23.864 9.10533 23.992 8.572 23.992Z" />
              <path d="M16.1423 6.296L14.0303 4.024V3.704C14.6063 2.936 15.3849 2.264 16.3663 1.688L18.4783 3.896L18.4463 4.28C18.0196 4.57867 17.6143 4.90933 17.2303 5.272C16.8676 5.63467 16.5049 5.976 16.1423 6.296ZM18.9902 24.312C17.6249 23.8 16.5689 23.3413 15.8223 22.936C15.0969 22.5093 14.7343 22.1253 14.7343 21.784C14.7343 21.4853 14.7662 21.0267 14.8302 20.408C14.9156 19.768 14.9583 19.1493 14.9583 18.552V13.976C14.9583 13.4213 14.9796 12.9093 15.0223 12.44C15.0863 11.9493 15.1823 11.5227 15.3103 11.16H14.2543L12.5583 8.984L12.7823 8.44H16.8783L18.7343 10.936C18.4783 11.2773 18.3076 11.704 18.2222 12.216C18.1582 12.728 18.1263 13.3787 18.1263 14.168V18.904C18.1263 19.672 18.0942 20.3547 18.0303 20.952C17.9663 21.528 17.9342 21.9653 17.9342 22.264C17.9342 22.4773 18.0089 22.648 18.1583 22.776C18.3289 22.8827 18.7343 23.1067 19.3743 23.448L18.9902 24.312Z" />
              <path d="M30.5505 19.288L33.2385 21.016C32.8118 22.0187 32.1932 22.7867 31.3825 23.32C30.5932 23.8533 29.6972 24.12 28.6945 24.12C28.0545 24.12 27.3718 23.9813 26.6465 23.704C25.9212 23.4053 25.2385 23.032 24.5985 22.584C23.9585 22.136 23.4252 21.6667 22.9985 21.176C22.5932 20.6853 22.3905 20.2267 22.3905 19.8C22.3905 19.5227 22.3905 19.096 22.3905 18.52C22.4118 17.944 22.4225 17.3467 22.4225 16.728C22.4438 16.088 22.4545 15.5547 22.4545 15.128V12.504C22.4545 11.096 22.8812 10.0293 23.7345 9.304C24.5878 8.55733 25.7292 8.184 27.1585 8.184C27.6065 8.184 28.1292 8.32267 28.7265 8.6C29.3238 8.856 29.9105 9.208 30.4865 9.656C31.0625 10.0827 31.5425 10.5627 31.9265 11.096C32.3105 11.608 32.5025 12.12 32.5025 12.632C32.5025 13.1867 32.4812 13.6773 32.4385 14.104C32.3958 14.5093 32.3425 14.8827 32.2785 15.224L28.9825 14.584C29.1532 13.56 29.2385 12.664 29.2385 11.896C29.2385 11.5333 29.1638 11.288 29.0145 11.16C28.8865 11.032 28.6732 10.968 28.3745 10.968C26.5398 10.968 25.6225 11.8853 25.6225 13.72V16.28C25.6225 17.6453 25.6012 18.648 25.5585 19.288C25.5372 19.9067 25.5265 20.3973 25.5265 20.76C25.5265 20.9947 25.6332 21.176 25.8465 21.304C26.0598 21.432 26.3265 21.496 26.6465 21.496C27.4358 21.496 28.1078 21.336 28.6625 21.016C29.2172 20.6747 29.7185 20.1307 30.1665 19.384L30.5505 19.288Z" />
              <path d="M36.8448 23.672L34.9888 20.888C35.3088 20.3547 35.7568 19.6507 36.3328 18.776C36.9301 17.9013 37.5594 16.9733 38.2208 15.992C38.9034 14.9893 39.5434 14.04 40.1408 13.144C40.7594 12.248 41.2501 11.5227 41.6128 10.968H41.0688C40.0234 10.968 39.1914 11.032 38.5728 11.16C37.9754 11.288 37.4848 11.5227 37.1008 11.864H36.5568L34.6048 8.984L34.8608 8.44H42.6688L44.7488 11.288C44.5568 11.608 44.2581 12.0773 43.8528 12.696C43.4688 13.3147 43.0208 14.0187 42.5088 14.808C42.0181 15.576 41.5061 16.3653 40.9728 17.176C40.4608 17.9653 39.9701 18.712 39.5008 19.416C39.0528 20.0987 38.6901 20.664 38.4128 21.112H38.6048C39.2234 21.1333 40.0021 21.1333 40.9408 21.112C41.9008 21.0693 42.8394 20.9733 43.7568 20.824L45.2928 23.128L45.0368 23.672H36.8448Z" />
            </mask>
            <path
              d="M8.572 23.992C8.252 23.992 7.81467 23.8747 7.26 23.64C6.70533 23.384 6.14 23.064 5.564 22.68C4.988 22.2747 4.49733 21.8587 4.092 21.432C3.68667 20.984 3.484 20.5573 3.484 20.152C3.484 19.9173 3.49467 19.672 3.516 19.416C3.53733 19.16 3.56933 18.8293 3.612 18.424C3.65467 17.9973 3.68667 17.432 3.708 16.728C3.72933 16.024 3.74 15.1067 3.74 13.976C3.74 13.5493 3.74 13.1013 3.74 12.632C3.74 12.1627 3.72933 11.672 3.708 11.16H3.132L1.5 9.016L1.724 8.504C2.85467 8.376 3.56933 8.03467 3.868 7.48C4.16667 6.92533 4.316 6.08267 4.316 4.952L4.86 4.76L6.812 6.232C6.812 6.616 6.812 6.98933 6.812 7.352C6.812 7.71467 6.812 8.07733 6.812 8.44H9.532L11.132 10.68L10.908 11.16H6.844C6.844 11.928 6.844 12.664 6.844 13.368C6.844 14.072 6.844 14.744 6.844 15.384C6.844 16.6213 6.82267 17.5707 6.78 18.232C6.75867 18.8933 6.72667 19.384 6.684 19.704C6.64133 20.024 6.62 20.3227 6.62 20.6C6.62 21.0267 6.844 21.24 7.292 21.24C7.676 21.24 8.092 21.144 8.54 20.952C8.988 20.7387 9.404 20.4827 9.788 20.184H10.236L11.74 22.68C11.4413 23.0427 10.972 23.352 10.332 23.608C9.692 23.864 9.10533 23.992 8.572 23.992Z"
              fill="#0E464F"
            />
            <path
              d="M16.1423 6.296L14.0303 4.024V3.704C14.6063 2.936 15.3849 2.264 16.3663 1.688L18.4783 3.896L18.4463 4.28C18.0196 4.57867 17.6143 4.90933 17.2303 5.272C16.8676 5.63467 16.5049 5.976 16.1423 6.296ZM18.9902 24.312C17.6249 23.8 16.5689 23.3413 15.8223 22.936C15.0969 22.5093 14.7343 22.1253 14.7343 21.784C14.7343 21.4853 14.7662 21.0267 14.8302 20.408C14.9156 19.768 14.9583 19.1493 14.9583 18.552V13.976C14.9583 13.4213 14.9796 12.9093 15.0223 12.44C15.0863 11.9493 15.1823 11.5227 15.3103 11.16H14.2543L12.5583 8.984L12.7823 8.44H16.8783L18.7343 10.936C18.4783 11.2773 18.3076 11.704 18.2222 12.216C18.1582 12.728 18.1263 13.3787 18.1263 14.168V18.904C18.1263 19.672 18.0942 20.3547 18.0303 20.952C17.9663 21.528 17.9342 21.9653 17.9342 22.264C17.9342 22.4773 18.0089 22.648 18.1583 22.776C18.3289 22.8827 18.7343 23.1067 19.3743 23.448L18.9902 24.312Z"
              fill="#0E464F"
            />
            <path
              d="M30.5505 19.288L33.2385 21.016C32.8118 22.0187 32.1932 22.7867 31.3825 23.32C30.5932 23.8533 29.6972 24.12 28.6945 24.12C28.0545 24.12 27.3718 23.9813 26.6465 23.704C25.9212 23.4053 25.2385 23.032 24.5985 22.584C23.9585 22.136 23.4252 21.6667 22.9985 21.176C22.5932 20.6853 22.3905 20.2267 22.3905 19.8C22.3905 19.5227 22.3905 19.096 22.3905 18.52C22.4118 17.944 22.4225 17.3467 22.4225 16.728C22.4438 16.088 22.4545 15.5547 22.4545 15.128V12.504C22.4545 11.096 22.8812 10.0293 23.7345 9.304C24.5878 8.55733 25.7292 8.184 27.1585 8.184C27.6065 8.184 28.1292 8.32267 28.7265 8.6C29.3238 8.856 29.9105 9.208 30.4865 9.656C31.0625 10.0827 31.5425 10.5627 31.9265 11.096C32.3105 11.608 32.5025 12.12 32.5025 12.632C32.5025 13.1867 32.4812 13.6773 32.4385 14.104C32.3958 14.5093 32.3425 14.8827 32.2785 15.224L28.9825 14.584C29.1532 13.56 29.2385 12.664 29.2385 11.896C29.2385 11.5333 29.1638 11.288 29.0145 11.16C28.8865 11.032 28.6732 10.968 28.3745 10.968C26.5398 10.968 25.6225 11.8853 25.6225 13.72V16.28C25.6225 17.6453 25.6012 18.648 25.5585 19.288C25.5372 19.9067 25.5265 20.3973 25.5265 20.76C25.5265 20.9947 25.6332 21.176 25.8465 21.304C26.0598 21.432 26.3265 21.496 26.6465 21.496C27.4358 21.496 28.1078 21.336 28.6625 21.016C29.2172 20.6747 29.7185 20.1307 30.1665 19.384L30.5505 19.288Z"
              fill="#0E464F"
            />
            <path
              d="M36.8448 23.672L34.9888 20.888C35.3088 20.3547 35.7568 19.6507 36.3328 18.776C36.9301 17.9013 37.5594 16.9733 38.2208 15.992C38.9034 14.9893 39.5434 14.04 40.1408 13.144C40.7594 12.248 41.2501 11.5227 41.6128 10.968H41.0688C40.0234 10.968 39.1914 11.032 38.5728 11.16C37.9754 11.288 37.4848 11.5227 37.1008 11.864H36.5568L34.6048 8.984L34.8608 8.44H42.6688L44.7488 11.288C44.5568 11.608 44.2581 12.0773 43.8528 12.696C43.4688 13.3147 43.0208 14.0187 42.5088 14.808C42.0181 15.576 41.5061 16.3653 40.9728 17.176C40.4608 17.9653 39.9701 18.712 39.5008 19.416C39.0528 20.0987 38.6901 20.664 38.4128 21.112H38.6048C39.2234 21.1333 40.0021 21.1333 40.9408 21.112C41.9008 21.0693 42.8394 20.9733 43.7568 20.824L45.2928 23.128L45.0368 23.672H36.8448Z"
              fill="#0E464F"
            />
            <path
              d="M8.572 23.992C8.252 23.992 7.81467 23.8747 7.26 23.64C6.70533 23.384 6.14 23.064 5.564 22.68C4.988 22.2747 4.49733 21.8587 4.092 21.432C3.68667 20.984 3.484 20.5573 3.484 20.152C3.484 19.9173 3.49467 19.672 3.516 19.416C3.53733 19.16 3.56933 18.8293 3.612 18.424C3.65467 17.9973 3.68667 17.432 3.708 16.728C3.72933 16.024 3.74 15.1067 3.74 13.976C3.74 13.5493 3.74 13.1013 3.74 12.632C3.74 12.1627 3.72933 11.672 3.708 11.16H3.132L1.5 9.016L1.724 8.504C2.85467 8.376 3.56933 8.03467 3.868 7.48C4.16667 6.92533 4.316 6.08267 4.316 4.952L4.86 4.76L6.812 6.232C6.812 6.616 6.812 6.98933 6.812 7.352C6.812 7.71467 6.812 8.07733 6.812 8.44H9.532L11.132 10.68L10.908 11.16H6.844C6.844 11.928 6.844 12.664 6.844 13.368C6.844 14.072 6.844 14.744 6.844 15.384C6.844 16.6213 6.82267 17.5707 6.78 18.232C6.75867 18.8933 6.72667 19.384 6.684 19.704C6.64133 20.024 6.62 20.3227 6.62 20.6C6.62 21.0267 6.844 21.24 7.292 21.24C7.676 21.24 8.092 21.144 8.54 20.952C8.988 20.7387 9.404 20.4827 9.788 20.184H10.236L11.74 22.68C11.4413 23.0427 10.972 23.352 10.332 23.608C9.692 23.864 9.10533 23.992 8.572 23.992Z"
              stroke="white"
              strokeWidth="2"
              mask="url(#path-1-outside-1_4018_284)"
            />
            <path
              d="M16.1423 6.296L14.0303 4.024V3.704C14.6063 2.936 15.3849 2.264 16.3663 1.688L18.4783 3.896L18.4463 4.28C18.0196 4.57867 17.6143 4.90933 17.2303 5.272C16.8676 5.63467 16.5049 5.976 16.1423 6.296ZM18.9902 24.312C17.6249 23.8 16.5689 23.3413 15.8223 22.936C15.0969 22.5093 14.7343 22.1253 14.7343 21.784C14.7343 21.4853 14.7662 21.0267 14.8302 20.408C14.9156 19.768 14.9583 19.1493 14.9583 18.552V13.976C14.9583 13.4213 14.9796 12.9093 15.0223 12.44C15.0863 11.9493 15.1823 11.5227 15.3103 11.16H14.2543L12.5583 8.984L12.7823 8.44H16.8783L18.7343 10.936C18.4783 11.2773 18.3076 11.704 18.2222 12.216C18.1582 12.728 18.1263 13.3787 18.1263 14.168V18.904C18.1263 19.672 18.0942 20.3547 18.0303 20.952C17.9663 21.528 17.9342 21.9653 17.9342 22.264C17.9342 22.4773 18.0089 22.648 18.1583 22.776C18.3289 22.8827 18.7343 23.1067 19.3743 23.448L18.9902 24.312Z"
              stroke="white"
              strokeWidth="2"
              mask="url(#path-1-outside-1_4018_284)"
            />
            <path
              d="M30.5505 19.288L33.2385 21.016C32.8118 22.0187 32.1932 22.7867 31.3825 23.32C30.5932 23.8533 29.6972 24.12 28.6945 24.12C28.0545 24.12 27.3718 23.9813 26.6465 23.704C25.9212 23.4053 25.2385 23.032 24.5985 22.584C23.9585 22.136 23.4252 21.6667 22.9985 21.176C22.5932 20.6853 22.3905 20.2267 22.3905 19.8C22.3905 19.5227 22.3905 19.096 22.3905 18.52C22.4118 17.944 22.4225 17.3467 22.4225 16.728C22.4438 16.088 22.4545 15.5547 22.4545 15.128V12.504C22.4545 11.096 22.8812 10.0293 23.7345 9.304C24.5878 8.55733 25.7292 8.184 27.1585 8.184C27.6065 8.184 28.1292 8.32267 28.7265 8.6C29.3238 8.856 29.9105 9.208 30.4865 9.656C31.0625 10.0827 31.5425 10.5627 31.9265 11.096C32.3105 11.608 32.5025 12.12 32.5025 12.632C32.5025 13.1867 32.4812 13.6773 32.4385 14.104C32.3958 14.5093 32.3425 14.8827 32.2785 15.224L28.9825 14.584C29.1532 13.56 29.2385 12.664 29.2385 11.896C29.2385 11.5333 29.1638 11.288 29.0145 11.16C28.8865 11.032 28.6732 10.968 28.3745 10.968C26.5398 10.968 25.6225 11.8853 25.6225 13.72V16.28C25.6225 17.6453 25.6012 18.648 25.5585 19.288C25.5372 19.9067 25.5265 20.3973 25.5265 20.76C25.5265 20.9947 25.6332 21.176 25.8465 21.304C26.0598 21.432 26.3265 21.496 26.6465 21.496C27.4358 21.496 28.1078 21.336 28.6625 21.016C29.2172 20.6747 29.7185 20.1307 30.1665 19.384L30.5505 19.288Z"
              stroke="white"
              strokeWidth="2"
              mask="url(#path-1-outside-1_4018_284)"
            />
            <path
              d="M36.8448 23.672L34.9888 20.888C35.3088 20.3547 35.7568 19.6507 36.3328 18.776C36.9301 17.9013 37.5594 16.9733 38.2208 15.992C38.9034 14.9893 39.5434 14.04 40.1408 13.144C40.7594 12.248 41.2501 11.5227 41.6128 10.968H41.0688C40.0234 10.968 39.1914 11.032 38.5728 11.16C37.9754 11.288 37.4848 11.5227 37.1008 11.864H36.5568L34.6048 8.984L34.8608 8.44H42.6688L44.7488 11.288C44.5568 11.608 44.2581 12.0773 43.8528 12.696C43.4688 13.3147 43.0208 14.0187 42.5088 14.808C42.0181 15.576 41.5061 16.3653 40.9728 17.176C40.4608 17.9653 39.9701 18.712 39.5008 19.416C39.0528 20.0987 38.6901 20.664 38.4128 21.112H38.6048C39.2234 21.1333 40.0021 21.1333 40.9408 21.112C41.9008 21.0693 42.8394 20.9733 43.7568 20.824L45.2928 23.128L45.0368 23.672H36.8448Z"
              stroke="white"
              strokeWidth="2"
              mask="url(#path-1-outside-1_4018_284)"
            />
          </svg>
        </div>
      </div>

      <ul className="hidden lg:flex items-center gap-4">
        <li className="p-2.5">
          <a
            href="#"
            className="text-white text-lg font-normal font-jejuMyeongjo"
          >
            Events
          </a>
        </li>
        <li className="p-2.5">
          <a
            href="#"
            className="text-[#b3b3b3] text-lg font-normal font-jejuMyeongjo"
          >
            My Tickets
          </a>
        </li>
        <li className="p-2.5">
          <a
            href="#"
            className="text-[#b3b3b3] text-lg font-normal font-jejuMyeongjo"
          >
            About Project
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="flex gap-2 items-center bg-white hover:bg-[#24A0B5] hover:text-white border border-white py-3 px-4 rounded-xl text-[#0a0c11] text-sm font-normal font-jejuMyeongjo uppercase group"
      >
        my tickets
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 group-hover:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden group-hover:flex"
        >
          <path
            d="M0.646447 12.3033C0.451184 12.4986 0.451184 12.8152 0.646447 13.0104C0.841709 13.2057 1.15829 13.2057 1.35355 13.0104L0.646447 12.3033ZM12.8137 1.34315C12.8137 1.06701 12.5899 0.843153 12.3137 0.843152L7.81371 0.843152C7.53757 0.843152 7.31371 1.06701 7.31371 1.34315C7.31371 1.61929 7.53757 1.84315 7.81371 1.84315L11.8137 1.84315L11.8137 5.84315C11.8137 6.11929 12.0376 6.34315 12.3137 6.34315C12.5899 6.34315 12.8137 6.11929 12.8137 5.84315L12.8137 1.34315ZM1.35355 13.0104L12.6673 1.69671L11.9602 0.989599L0.646447 12.3033L1.35355 13.0104Z"
            fill="#D9D9D9"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
