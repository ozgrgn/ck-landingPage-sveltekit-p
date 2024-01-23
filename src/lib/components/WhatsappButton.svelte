<script>
    	import {landingPage } from '$services/store';

    import Svg from '$assets/svg.json';
export let customCss
</script>
<div class="">
<button
class="{customCss} bg-whatsapp text-white border-none font-bold rounded text-sm hover:scale-[1.03] transition-all duration-500  "
>
<a href="https://wa.me/{$landingPage?.whatsapp}" class="flex justify-center items-center">
    <svg
        class="h-5 w-5 pt-[0.1rem] pr-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64 "
    >
        {@html Svg.whatsapp}
    </svg><span>Whatsapp</span>
</a></button
>
</div>