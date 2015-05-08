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
          username: 'Jenny OneEightEight'
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
          username: 'Jenny OneEightEight',
          userImage: 'http://www.placecage.com/40/40',
          message: 'SQUEEEEEEE!!!!',
          createdAt: new Date(),
          likes: [
            {
              username: 'Pork Products'
            }
          ]
        },
        {
          username: 'Pork Products',
          userImage: 'http://www.placecage.com/40/40',
          message: 'I do not like this and I did not mean to like this',
          createdAt: new Date(),
          likes: null
        }
      ]
    }
  ];
  vm.googlePosts = [
    {
      userImage: 'http://www.placecage.com/c/46/46',
      fullName: 'Lorem Googsum',
      privacy: 'Close Friends', // can be anything - it's a self-defined circle
      createdAt: new Date(),

      message: 'In fermentum urna erat, eget tristique quam porttitor non. Aliquam mattis tellus libero, nec fringilla diam auctor ac volutpat.',
      image: 'http://www.placecage.com/506/400',
      video: null,

      plusOneCount: 3,
      sharesCount: 1,
      comments: [
        {
          userImage: 'http://www.placecage.com/40/40',
          username: 'Nick Cage',
          createdAt: new Date(),
          plusOneCount: 1,
          message: 'LOL'
        },
        {
          userImage: 'http://www.placecage.com/40/40',
          username: 'Dick Ipsum',
          createdAt: new Date(),
          plusOneCount: 4,
          message: 'u should use bacon ipsum'
        }
      ],
      relatedUsers: [
        {
          userImage: 'http://lorempixel.com/28/28/'
        },
        {
          userImage: 'http://www.placecage.com/28/28'
        }
      ]
    }
  ];
  vm.instagrams = [
    {
      username: 'ipsumgram',
      userImage: 'http://www.placecage.com/150/150',
      image: 'http://www.placecage.com/640/640',
      video: null,
      createdAt: new Date(),
      message: 'I made a burrito',
      likes: [
        {
          username: 'yourmom'
        },
        {
          username: 'yourdad'
        }
      ],
      comments: [
        {
          username: 'abesandwich',
          userImage: 'http://www.placecage.com/40/40',
          message: 'This isn\'t a burrito, I thought this was going to be a burrito'
        },
        {
          username: 'toomanyhams',
          userImage: 'http://www.placecage.com/40/40',
          message: 'Not enough hams'
        }
      ]
    }
  ];
}];
