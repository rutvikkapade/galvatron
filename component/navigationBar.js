import Link from 'next/link'

export const NavigationBar=()=>{
    return(
        <div className="navigationBar" >
            <a className="navigationA"  href="#">Home</a>
            <Link href="/secondPage">
            <a  className="navigationA" >second page </a>
            </Link>
            <a className="navigationA" href="#">yolo</a>
            <a  className="navigationA" href="#">login</a>
        </div>
    )
}

