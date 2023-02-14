import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <div className='mx-6 md:max-w-2xl md:mx-auto lg:max-w-4xl lg:mx-auto '>
            <Nav />
            <main>{children}</main>
        </div>
    )
}