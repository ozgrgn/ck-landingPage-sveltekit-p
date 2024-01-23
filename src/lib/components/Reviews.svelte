<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { shared, desktop } from '$services/store';

	import '@splidejs/svelte-splide/css';
	export let reviews;

	let perPage = 1;
	if ($desktop) {
		perPage = 4;
	}
</script>

<!-- REVIEWS -->
<div class=" rounded-lg mx-5  py-5 md:py-0 hidden-xs ">
	<div class="container mx-auto">
		<div class="rounded-lg">
			<div class="testimonials -px-5 ">
				<Splide
					aria-label="My Favorite Images"
					options={{
						arrows: false,
						type: 'loop',
						pagination: true,
						autoplay: true,
						perPage: perPage,

						interval: 3500,
						classes: {
							pagination: 'splide__pagination main-slider-pagination',
							page: 'splide__pagination__page main-slider-page'
						}
					}}
				>
					{#if reviews}
						{#each Array(20) as _, i}
							{#if reviews[i]}
								<SplideSlide>
									<div
										class="flex flex-col p-5 h-64 bg-white shadow shadow-xl mx-5 md:mt-10 mb-10 md:mb-20 rounded"
									>
										<div class="review-header">
											<div class="review-avatar">
												<div class="review-avatar-bg flex flex-col justify-center text-center ">
													{#if reviews[i]?.reviewAvatar}
														<img
															src={reviews[i]?.reviewAvatar}
															alt=""
															width="44"
															height="44"
															class="ReviewAvatar__Avatar-sc-1lraoly-2 TOyBs"
														/>
													{:else}
														<div class="font-semibold ">
															{reviews[i]?.reviewName.charAt(0)}
														</div>
													{/if}
												</div>
											</div>
											<div class="review-info">
												<span class="review-author">{reviews[i]?.reviewName}</span>
												<div class="review-info2">
													<div class="ratings">
														<div class="empty-stars" />
														<div
															class="full-stars-tp {reviews[i]?.reviewPlatform == 'Google'
																? 'text-custom-gcolor'
																: reviews[i]?.reviewPlatform == 'TrustPilot'
																? 'text-custom-tcolor'
																: reviews[i]?.reviewPlatform == 'Facebook'
																? 'text-custom-fcolor'
																: ''} {reviews[i]?.reviewStars == 1
																? 'w-1/5'
																: reviews[i]?.reviewStars == 2
																? 'w-2/5'
																: reviews[i]?.reviewStars == 3
																? 'w-3/5'
																: reviews[i]?.reviewStars == 4
																? 'w-4/5'
																: 'w-full'}"
														/>
													</div>
													<div class="review-date hidden xl:block">
														{reviews[i]?.reviewDate}
													</div>
												</div>
											</div>
										</div>
										<div class="review-text">
											<div class="review-text-outer">
												<div class="review-text-inner">
													<div>
														{reviews[i]?.reviewText}
													</div>
												</div>
											</div>
										</div>
										<a href={reviews[i]?.reviewLink}>
											<div class="review-readmore">{$shared?.readMore}</div></a
										>
										<a
											class="review-link"
											href={reviews[i]?.reviewLink}
											target="_blank"
											rel="noopener noreferrer nofollow"
											><div class="review-logo-container">
												<div class="review-postedon">{$shared?.postedOn}</div>
												<div title="Google" class="review-icon w-36">
													<div>
														{#if reviews[i]?.reviewPlatform == 'Google'}
															<div class="flex justify-start items-center">
																<div class="h-10 flex items-center">
																	<img
																		class="h-8"
																		src="/assets/img/reviews/{reviews[i]?.reviewPlatform}.svg"
																		alt=""
																	/>
																</div>
															</div>
														{/if}
														{#if reviews[i]?.reviewPlatform == 'TrustPilot'}
															<div class="flex justify-center items-start">
																<div class=" flex justify-start  items-center h-8">
																	<img
																		class="h-7"
																		src="/assets/img/reviews/{reviews[i]?.reviewPlatform}.svg"
																		alt=""
																	/>
																</div>
															</div>
														{/if}
													</div>
												</div>
											</div></a
										>
									</div>
								</SplideSlide>
							{/if}
						{/each}
					{/if}
				</Splide>
			</div>
		</div>
	</div>
</div>

<style>
	/* REVIEWS */

	.review-header {
		flex-wrap: nowrap !important;
		display: flex !important;
		position: static !important;
		color: inherit !important;
		max-width: 100% !important;
		text-decoration: none !important;
		border: none !important;
	}
	.review-avatar {
		flex: 0 0 auto;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		overflow: hidden;
	}
	.review-avatar-bg {
		width: 100%;
		height: 100%;
		transition: opacity 1s ease-out 0s;
		background-color: rgb(210, 210, 210);
		border-radius: 50%;
		overflow: hidden;
		opacity: 1;
	}
	.review-info {
		margin-left: 16px;
		display: flex;
		flex-direction: column;
		min-width: 0px;
	}
	.review-author {
		font-size: 14px;
		font-weight: 500;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: left;
		color: rgb(17, 17, 17);
	}
	.review-info2 {
		display: flex;
		flex-wrap: wrap;
		-webkit-box-align: center;
		align-items: center;
	}
	.ratings {
		position: relative;
		vertical-align: top;
		display: inline-block;
		color: #b1b1b1;
		overflow: hidden;
	}

	.full-stars-tp {
		position: absolute;
		left: 0;
		top: 0;
		white-space: nowrap;
		overflow: hidden;
	}
	.empty-stars:before,
	.full-stars-tp:before {
		content: '\2605\2605\2605\2605\2605';
		font-size: 12pt;
	}
	.empty-stars:before {
		-webkit-text-stroke: 1px #b1b1b1;
	}

	/* Webkit-text-stroke is not supported on firefox or IE */

	/* Firefox */
	@-moz-document url-prefix() {
		.full-stars {
			color: rgb(252, 191, 2) !important;
		}
	}
	.review-date {
		padding-left: 10px;
		overflow: hidden;
		min-width: 0px;
		font-weight: 400;
		font-size: 12px;
		line-height: 1.17;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: rgba(17, 17, 17, 0.5);
	}
	.review-text {
		font-weight: 400;
		margin-top: 8px;
		width: 100%;
		line-height: 1.3;
		color: rgb(17, 17, 17);
		font-size: 13px;
		text-align: left;
	}
	.review-text-outer {
		position: relative;
		overflow: hidden;
		height: 67px;
		width: 100%;
		line-height: 1.3;
		color: rgb(17, 17, 17);
		font-size: 13px;
		text-align: left;
	}
	.review-link {
		margin-top: 12px;
		display: block !important;
		position: static !important;
		color: inherit !important;
		max-width: 100% !important;
		text-decoration: none !important;
		border: none !important;
	}
	.review-postedon {
		color: rgba(17, 17, 17, 0.5);
		font-family: Montserrat;
		font-weight: 400;
		font-size: 13px;
	}
	.review-icon {
		font-size: 13px !important;
		flex: 0 1 0%;
	}
	.review-readmore {
		display: inline-block;
		cursor: pointer;
		font-size: 14px;
		color: rgba(17, 17, 17, 0.5);
	}

	:global(.testimonials .main-slider-page) {
		background-color: #f2f2f2 !important;
	}
	:global(.testimonials .main-slider-page.is-active) {
		background-color: #65bdc2 !important;
	}
</style>
