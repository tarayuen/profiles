var app = angular.module("myApp",[]);

app.controller("myCtrl", function($scope) {
	$scope.friends = [
		{nickName:'krysia', content:' is a project manager who is really proud of her collection of erasers used throughout the degree (she has like 9 stubs because she makes "so many mistakes"). She’ll run a coffee shop for a year if she gets amazing coffee and an adorable puppy.'},
		{nickName:'andy', content:''},
		{nickName:'shan', content:''},
		{nickName:'earvin', content:' is a star student with a passion for medical science. In 10 years he would like to live in Toronto with 2 dogs. Throughout the degree he’s only pulled 3 all-nighters - one of which was for a midterm he unfortunately did not pass. Luckily, it was in a course irrelevant to his future Master’s at U of T. His greatest memories from university come from Systems parties, particularly one named Jenny Says Beer Pong is OK. As he puts it, “I don’t need a glass, I drink out of the bottle.”'},
		{nickName:'shreya', content:' is a true Torontonian who finds solace in Drake’s music, new Instagram obsessions, and reading Harry Potter. She didn’t pull any all-nighters the whole degree and would need at least $5 million to re-take it - but if she was forced to do undergrad again she would definitely choose Systems. One of her favourite memories is the day weed got legalized. Her office at eBay took a work trip down to the dispensary that day.'},
		{nickName:'sam', content:' hardcore carries every team he’s on and likewise would run a coffee shop for free. His favourite memory of the degree was the first Systems cottage weekend; least favourite was quitting his co-op early due to the fear of being deported. As he and Lil Wayne puts it, “life’s a beach and I’m just playing in the sand.”'},
		{nickName:'seb', content:' loves music and all things tech. Despite this, you would have to pay him literally nothing to run a coffee shop. He would do that his whole life. Best event from his undergrad was a social event with free booze where the company was bashed the entire time. In 20 years, catch him on the slopes as a permanent snowboard bum hermit.'},
		{nickName:'bill', content:' is System’s meme page admin and his favourite event has been Every Friday night at R Place™ on Sunview. NSFW - git push origin master -f'},
		{nickName:'hanna', content:'’s spirit animal is the combination of a turtle, sloth, and penguin. You can usually catch her playing with her puppy, doing CrossFit, or digital painting. In 10 years she wants to be working in Denmark and skiing to work every day.'},
		{nickName:'alex', content:' is a gamer by day and gamer by night. NSFW - running across the office in a towel because he forgot his clothes at his desk when he went to shower. '},
		{nickName:'steph', content:'’s spirit animal is her dog, Winston. She loved her time in Systems but to do it again she would need to be paid $1 million with the guarantee that her friends went with her. NSFW - showing up hungover after 12 Barz for her final evaluation at work.'},
		{nickName:'dom', content:' wants to be a diving instructor in 20 years. One of his favourite memories is driving up to Ottawa during the winter to skate with friends. NSFW - going to Phils with coworkers and then getting kicked out.'},
		{nickName:'keith', content:'’s spirit animal is System’s one and only (and very much cherished) Igor. His favourite thing about his best friend is that he always pours him shots as “the negative influence is a nice scapegoat to have.” NSFW - getting too drunk on Baileys before an intern presentation at Microsoft.'},
		{nickName:'jenny', content:'’s spirit animal is a pomeranian. She managed to finish the degree with absolutely zero all-nighters. In 10 years, she hopes to be back in Canada with a condo downtown while being the owner of a bubble tea shop.'},
		{nickName:'umesh', content:'’s spirit animal is System’s prof Ponnu. He pulled many all nighters throughout the degree and called the computer lab his home. His favourite event was All Systems Classy 2019.'},
		{nickName:'samantha', content:'’s spirit animal is a turtle. Her best I f’ed up moment was during this shoot as she ate a chili pepper that was too hot to handle.'},
		{nickName:'hayes', content:' is a product designer who loves making comics, writing stories, and singing songs. He finds happiness in cooking a difficult recipe successfully and reading an enlightening book. On the flipside, he would absolutely never skydive (even if you gave him $1000). One of his f’ed up moments of the degree is on exchange when he got 22% on a midterm and also missed a different one. NSFW - presenting something and then messaging my friend yikes which then showed up on the screen for everyone to see.'},
		{nickName:'mudmie', content:'’s spirit animal is a gudetama. In 10 years, she wants to open a nail salon.'},
		{nickName:'ethan', firstName:'Ethan', lastName:'Liang'},
		{nickName:'jessie', firstName:'Jessie', lastName:'Won'},
		{nickName:'ashley', firstName:'Ashley', lastName:'Hu'},
		{nickName:'shio', firstName:'Michael', lastName:'Shiozaki'},
		{nickName:'andrea', firstName:'Andrea', lastName:'Edwards'},
		{nickName:'kevin', firstName:'Kevin', lastName:'Luong'},
		{nickName:'cindy', firstName:'Cindy', lastName:'Liu'},
		{nickName:'justin', firstName:'Justin', lastName:'Schaper'},
		{nickName:'jeff', firstName:'Jeffrey', lastName:'Wang'},
		{nickName:'andrew', firstName:'Andrew', lastName:'Clarry'},
		{nickName:'zak', firstName:'Zachary', lastName:'Keller'},
		{nickName:'hunter', firstName:'Hunter', lastName:'McHugh'},
		{nickName:'rohan', firstName:'Rohan', lastName:'Saigaonkar'},
		{nickName:'tamilla', firstName:'Tamilla', lastName:'Bunyadova'},
		{nickName:'dylan', firstName:'Dylan', lastName:'Conway'},
		{nickName:'jon', firstName:'Jonathan', lastName:'Loos'},
		{nickName:'ron', firstName:'Ronald', lastName:'Kielstra'},
		{nickName:'amelia', firstName:'Amelia', lastName:'King'},
		{nickName:'jasdip', firstName:'Jasdip', lastName:'Chauhan'},
		{nickName:'pavi', firstName:'Pavneet', lastName:'Singh'},
		{nickName:'ken', firstName:'Ken', lastName:'Ives'},
		{nickName:'robi', firstName:'Roberto', lastName:'Sanchez'},
		{nickName:'heather', firstName:'Heather', lastName:'Chan'}
	];

	var url = window.location.href;
	var id = url.substring(url.lastIndexOf('#') + 1);

	index = $scope.friends.findIndex(x => x.nickName === id);

	$scope.friend = {
		nickName:id,
		content:$scope.friends[index].content
	};
});

app.filter('capitalize', function() {
    return function(input) {
      return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
});