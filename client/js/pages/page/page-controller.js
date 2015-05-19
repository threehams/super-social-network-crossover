'use strict';

var FRIENDS = [
  {
    username: 'jenny188',
    fullName: 'Jenny OneEightEight',
    userImage: 'http://www.placecage.com/c/73/73'
  },
  {
    username: 'porkproducts',
    fullName: 'Pork Products',
    userImage: 'http://lorempixel.com/73/73/'
  },
  {
    username: 'someotherguy',
    fullName: 'Someother Guy',
    userImage: 'http://lorempixel.com/g/73/73/'
  },
  {
    username: 'jenny188',
    fullName: 'Jenny OneEightEight',
    userImage: 'http://placeimg.com/73/73/any'
  },
  {
    username: 'momtwitsum',
    fullName: 'Mom Twitsum',
    userImage: 'http://placecorgi.com/73/73'
  },
  {
    username: 'dadtwitsum',
    fullName: 'Dad Twitsum',
    userImage: 'http://placecreature.com/73/73'
  }
];

var MESSAGES = [
  {
    message: 'I do not like this and I did not mean to like this'
  },
  {
    message: 'Hahaha you look like this guy',
    image: 'http://www.placecage.com/c/600/400'
  },
  {
    message: 'i don\'t get it'
  },
  {
    message: 'whats a verb'
  },
  {
    message: 'lol'
  },
  {
    message: 'wait then what\'s this',
    image: 'http://www.placecage.com/600/400'
  },
  {
    message: 'don\'t ya mean type'
  },
  {
    message: 'I am the soul of crushed tomatoes'
  },
  {
    message: 'yeah but albert einstein invented electricity'
  },
  {
    message: 'that\'s deep man'
  },
  {
    message: 'yeah well that\'s just, like, your opinion, man'
  },
  {
    message: 'Agree 110%'
  },
  {
    message: 'GO SEE MAD MAX',
    image: 'http://loremflickr.com/600/400/madmax'
  }
];

module.exports = ['Post', 'User', '$timeout', function (Post, User, $timeout) {
  var vm = this;

  vm.user = new User({
    username: 'loremtwitsum',
    fullName: 'Lorem Twitsum',
    userImage: 'http://www.placecage.com/c/73/73'
  });

  vm.friends = _.map(FRIENDS, function(friendAttrs) {
    return new User(friendAttrs);
  });

  vm.postTypes = Post.TYPES.concat('random');
  vm.postType = 'random';
  vm.commentCount = 3;
  vm.favoriteCount = 5;
  vm.shareCount = 4;

  vm.createPost = function() {
    var type = vm.postType === 'random' ? _.sample(Post.TYPES) : vm.postType;
    var post = new Post(vm.user, {
      type: type,
      message: _.sample(MESSAGES).message,
      tags: ['these', 'are', 'a', 'bunch', 'of', 'tags'],
      location: 'Los Angeles, CA',
      privacy: 'Friends',
      source: 'youtube.com',
      albumTitle: 'To Be Sorted',
      albumImage: 'http://www.placecage.com/50/50'
    });
    var attach;
    if (_.includes(['instagram', 'pinterest'], type)) {
      attach = _.random(0, 1);
    } else {
      attach = _.random(0, 3);
    }
    if (attach === 0) {
      post.image = 'http://www.placecage.com/600/450';
    } else if (attach === 1) {
      post.video = '/vid/not-the-bees.mp4';
    }
    vm.posts.unshift(post);

    _.times(vm.commentCount || 0, function(i) {
      $timeout(function() {
        var friend = _.sample(vm.friends);
        post.addComment(friend, _.sample(MESSAGES));
      }, (i + 1) * 1000);
    });
    _.times(vm.shareCount || 0, function(i) {
      $timeout(function () {
        var friend = _.sample(vm.friends);
        post.share(friend);
      }, (i + 1) * 700);
    });
    _.times(vm.favoriteCount || 0, function(i) {
      $timeout(function () {
        var friend = _.sample(vm.friends);
        post.favorite(friend);
      }, (i + 1) * 500);
    });
  };

  vm.posts = [];
  _.times(1, function() {
    vm.createPost();
  });

  vm.messages = [
    {
      username: 'Lorem Twitsum',
      userImage: 'http://www.placecage.com/80/80',
      message: 'why aren\'t you talking to me',
      createdAt: new Date()
    },
    {
      username: 'Lorem Twitsum',
      userImage: 'http://www.placecage.com/80/80',
      message: 'why haven\'t you liked my photo yet',
      createdAt: new Date()
    }
  ];
  vm.friendRequests = [
    {
      fullName: 'Your Grandmother',
      createdAt: new Date()
    },
    {
      fullName: 'Your Mother',
      createdAt: new Date()
    }
  ];
}];
