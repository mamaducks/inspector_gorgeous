export function ulList({children}) {
  return (
    <ul
      style={{
        listStyleType: 'square',
        fontWeight: 300,
        lineHeight: 2,
        fontSize: '1.1rem',
        letterSpacing: 1
      }}
    >
      {children}
    </ul>
  );
}
