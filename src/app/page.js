import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{textAlign:'center'}}>SMJB Capital Investments</h1>
        <Image
          className={styles.logo}
          src="/dryden.png"
          alt="Dryden image"
          style={{width:'100vw'}}
          height={200}
          priority
        />
        <article style={{margin:'50px 0',padding:'0 20px'}}>SMJB Capital Investments is a real estate acquisitions firm focused on buying, renovating ans then re-selling single family homes in the states of Georgia and Alabama.</article>
        <article style={{padding:'0 20px'}}>Please contact us for further information on our services at <Link style={{color:'#0000EE',textDecoration:'underline'}} href="mailto:info@smjbcapitalinvestments.com">info@smjbcapitalinvestments.com</Link></article>
      </main>
      <footer style={{backgroundColor:'black',flex:1,color:'white',display:'flex',width:'100vw',justifyContent:'space-evenly',alignItems:'center',padding:'20px 0',flexWrap:'wrap'}}>
       <p>Contact us: </p><Link href="mailto:info@smjbcapitalinvestments.com">info@smjbcapitalinvestments.com</Link>
      </footer>
    </div>
  );
}
