export function Container({ className, children }: any) {
    return <div className={`container ${className}`}>{children}</div>;
}

export function Item({ className, children }: any ) {
    return <div className={`item ${className}`}>{children}</div>
}