import { Elysia } from "elysia";
import { staticPlugin } from '@elysia/static'

const htmlContent = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIS-LPI | Segera Hadir</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
    <style>
        body { 
            font-family: 'Plus Jakarta Sans', sans-serif; 
        }
        .bg-pattern {
            background-color: #f0fdf4;
            background-image: radial-gradient(#22c55e 1px, transparent 1px);
            background-size: 40px 40px;
        }
    </style>
</head>
<body class="bg-pattern min-h-screen flex items-center justify-center p-6 text-gray-800">
    <div class="max-w-4xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 text-center border border-green-100">
        
        <!-- Deretan Logo: LPDP, Kemenag, UIN -->
        <div class="flex items-center justify-center gap-6 md:gap-10 mb-10">
            <img src="/public/lpdp.png" alt="Logo LPDP" class="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300">
            <img src="/public/kemenag.png" alt="Logo Kemenag" class="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300">
            <img src="/public/uin.png" alt="Logo UIN" class="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300">
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">SIS-LPI</h1>
        <h2 class="text-xl md:text-2xl font-semibold text-green-700 mb-8">Sistem Informasi Lembaga Pendidikan Islam</h2>
        
        <div class="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
        
        <p class="text-base md:text-lg text-gray-600 leading-relaxed mb-10 text-justify md:text-center">
            Platform informasi spasial berbasis GIS untuk membantu Lembaga Pendidikan Islam memetakan, mendokumentasikan, memantau, dan mengoptimalkan aset lahan. Mengintegrasikan prinsip <span class="italic font-bold text-green-800">amānah, khilāfah, dan mīzān</span> dengan pendekatan <span class="font-semibold text-gray-800">Strategic Adaptive Land Governance</span>, SIS-LPI menghadirkan pengelolaan lahan yang berbasis data sekaligus menjadi ruang pembelajaran ekologis bagi generasi masa depan.
        </p>
        
        <div class="inline-flex items-center gap-2 px-8 py-4 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 transition-all duration-300 transform hover:-translate-y-1">
            <svg class="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Segera Hadir
        </div>
    </div>
</body>
</html>
`;

const app = new Elysia()
    .use(staticPlugin())
    .get("/", () => {
        return new Response(htmlContent, {
            headers: {
                "Content-Type": "text/html; charset=utf8",
            },
        });
    })
    .listen(3000);

console.log(`🦊 SIS-LPI Landing Page is running at http://${app.server?.hostname}:${app.server?.port}`);