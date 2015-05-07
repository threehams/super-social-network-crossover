'use strict';

module.exports = [function () {
  var vm = this;

  vm.tweets = [
    {
      id: 'cba1715f-ef2b-4212-a72e-80ee540e1a55',
      userImage: 'http://www.placecage.com/c/73/73',
      fullName: 'Lorem Twitsum',
      username: '@loremtwitsum',
      message: 'In fermentum urna erat, eget tristique quam porttitor non. Aliquam mattis tellus libero, nec fringilla diam auctor ac volutpat.',
      createdAt: new Date(),
      image: 'http://www.placecage.com/600/450',
      video: null,
      retweetCount: 42,
      favoriteCount: 15,
      relatedUsers: [
        {
          userImage: 'http://lorempixel.com/73/73/'
        },
        {
          userImage: 'http://www.placecage.com/73/73'
        }
      ]
    }
  ];

  vm.facebookPosts = [
    {
      id: 'cba1715f-ef2b-4212-a72e-80ee540e1a55',
      userImage: 'http://www.placecage.com/c/40/40',
      fullName: 'Lorem Facesum',
      message: 'In fermentum urna erat, eget tristique quam porttitor non. Aliquam mattis tellus libero, nec fringilla diam auctor ac volutpat.',
      createdAt: new Date(),
      location: 'Los Angeles, CA',
      privacy: 'friends', // public, private
      image: 'http://www.placecage.com/c/470/300',
      video: null,
      likes: [
        {
          username: 'Jenny 188'
        },
        {
          username: 'Pork Products'
        },
        {
          username: 'Someother Guy'
        }
      ],
      commentsCount: 10,
      comments: [
        {
          username: 'Jenny 188',
          userImage: 'http://www.placecage.com/40/40',
          message: 'SQUEEEEEEE!!!!',
          createdAt: new Date(),
          likes: [
            {
              username: 'Pork Products'
            }
          ]
        }
      ]
    }
  ];
  vm.googlePosts = [
    {
      userImage: '',
      username: '',
      privacy: '',
      createdAt: new Date(),

      message: '',
      image: '',
      video: ''
      /*
       * ANATOMY OF A GOOGLE+ POST
       *
       * User icon
       * User name
       * Privacy setting (circle)
       * Time
       *
       * Text
       * Image
       * Video
       *
       * +1
       * Share
       * Add comment
       *
       * Comment count
       * Show/hide comments
       *
       * Comments
       *   Comment
       *     User icon
       *     User name
       *     Time
       *     +1 count
       *     +1 button
       *     Text
       *     On hover:
       *       Reply
       *       Flag
       *   Add comment box
       *     User icon
       *     Comment box
       *
       *     Post comment
       *     Cancel
       */

    }
  ];
}];
