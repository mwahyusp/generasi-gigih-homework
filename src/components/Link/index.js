import style from './style.module.css'

export default function Link({ to: url, isExternal = false, children }) {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      className={style.link}
      href={url}
      target="_blank" 
      without rel="noreferrer"
      // eslint-disable-next-line react/jsx-no-duplicate-props
      target={isExternal ? "_blank" : undefined}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
