import Head from 'next/head'
import CardGempa from '../components/CardGempa'
import Footer from '../components/Footer'

export default function Home(props) {
	const dataGempa = props.data

	return (
		<div>
			<Head>
				<title>Update Terkini Gempa di Indonesia</title>
			</Head>
			<div className="container py-20">
				<div className="flex flex-wrap justify-center">
					<div className="w-full md:w-2/3 lg:w-2/4">
						<div className="text-center mb-10">
							<div className="font-bold text-4xl mb-10">Data Gempa Terkini</div>
							<p>Berikut adalah 15 catatan gempa terakhir yang dirasakan di wilayah Indonesia.</p>
							<p className="mt-2 text-sm"><strong>Disclaimer</strong>: data di bawah ini diambil langsung melalui website dokumentasi <strong>BMKG Indonesia</strong> dengan link <a href="https://data.bmkg.go.id/gempabumi/" class="italic underline text-cyan-600" target="_blank">https://data.bmkg.go.id/gempabumi/</a></p>
						</div>

						<div className="space-y-5">
							{
								dataGempa?.Infogempa.gempa.map( (gempa, index) => {
									return (
										<CardGempa key={`gempa-${index}`} gempa={gempa} />
									)
								} )
							}
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json`)
	const data = await res.json()
  
	return { props: { data } }
  }
  
