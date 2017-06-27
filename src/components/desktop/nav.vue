<template>
	<div id="nav">
		<v-nav nav-class="blue">
			<a href="#" class="brand-logo" slot="logo">Logo</a>
			<ul class="right">
					<li>
						<a href="#"><v-icon>done</v-icon></a>
					</li>
					<li>
						<a href="#"><v-icon>list</v-icon></a>
					</li>
					<li>
						<a href="#" v-dropdown:v-icon-drop><v-icon>more_vert</v-icon></a>
					</li>
			</ul>
			<v-side-nav id="side2" slot="side-nav"></v-side-nav>
		</v-nav>
		<v-dropdown id="v-icon-drop">
			<li>
				<a href="#">Click me</a>
			</li>
			<li>
				<a href="#">Click me</a>
			</li>
			<li>
				<a href="#">Click me</a>
			</li>
		</v-dropdown>
	</div>
</template>
<style scoped>
	.nav {
		margin: 0;
	}
	.right {
		line-height: 0;
	}
</style>

