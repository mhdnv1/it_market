const BurgerButton = () => {
  return (
    <div style={{display: "inline", cursor: "pointer"}}>
      <svg
        width="30"
        height="20"
        viewBox="0 0 30 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 19C0 18.4477 0.447715 18 1 18H29C29.5523 18 30 18.4477 30 19C30 19.5523 29.5523 20 29 20H1C0.447716 20 0 19.5523 0 19Z"
          fill="#5A5A5A"
        />
        <rect y="9" width="20" height="2" rx="1" fill="#5A5A5A" />
        <rect width="30" height="2" rx="1" fill="#5A5A5A" />
      </svg>
    </div>
  );
};

export default BurgerButton;
