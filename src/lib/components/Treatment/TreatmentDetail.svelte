<script>
	import HtmlText from "../HtmlText.svelte";


  export let treatment
</script>

<div class=" w-2/3 flex flex-col gap-2 text-sm text-black/80 leading-6">
  <img class="w-full h-full object-cover pb-2" src={treatment.treatmentImage} alt="" />

 <HtmlText text={treatment.text}/>
</div>
