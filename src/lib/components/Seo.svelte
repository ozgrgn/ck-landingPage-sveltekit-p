<script>

    export let metaTitle;
    export let metaDescription
    
    </script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaDescription} >
    <script type="application/ld+json">{
        "@context": "http://schema.org",
        "@type": "WebSite",
          "name": {metaTitle},
          "description":{metaDescription}
        }</script>
</svelte:head>