# Discode

[Discode](https://discode9.herokuapp.com/) is a Discord clone, an instant messaging platform. On Discode, users can create servers, add friends, and chat in various chatrooms such as channels, direct messages, and group chats.

## Technologies Used
- Frontend: React, Redux, SCSS
- Backend: Ruby on Rails, PostgreSQL
- Live Chat: Action Cable WebSockets
- Storage: Amazon S3

## Key Features

<!-- ### User Authentication
- Users must have an account to access Discode.
- To minimize unecessary API requests, validations such as checking length and empty inputs are handled in React.

<img src='./app/assets/images/discode-user-auth.gif' />

- After logging in, users can edit their account information and choose/change/remove their profile avatar.

<img src='./app/assets/images/discode-user.gif' /> -->

### Live Chat
- Users can live chat in channels inside servers, in private direct messages, and group chats.

<img src='./app/assets/images/discode-live-chat.gif' />

```ruby
  def subscribed
    if (params[:type] == "Channel")
      @chat = Channel.find_by(id: params[:id])
    else
      @chat = Conversation.find_by(id: params[:id])
    end

    stream_for @chat
  end

  def receive(data)
    @message = Message.new(data)
    if @message.save
      res = {
        message: message_json,
        type: "message"
      }
      ChatChannel.broadcast_to(@chat, res)
    end
  end
```

```javascript
  useEffect(() => {
    const chat = App.cable.subscriptions.create(
      { channel: "ChatChannel", type: type, id: cc.id },
      {
        received: (res) => {
          switch (res.type) {
            case 'message':
              receiveMessage(res.message);
              break;
            case 'remove':
              removeMessage(res.message);
              break;
          }
        },
        update: function(data) {
          return this.perform("update", data);
        },
        delete: function(data) {
          return this.perform("delete", data);
        }
      }
    )
    setChat(chat);
    return () => chat.unsubscribe();
  }, [type, cc.id]);
```

### Servers and Channels
- Users can create/edit/delete their own servers and channels.
- Servers can have a custom server icon.

<img src='./app/assets/images/discode-servers.gif' />

### Friends
- Users can add/remove friends.
- Users can use the Friends tab to start new direct messages or group chats, and accept/ignore pending requests.

<img src='./app/assets/images/discode-friends.gif' />

```javascript
  const findIfSelected = (toAdd) => selectedFriends.findIndex(friend => friend.id === toAdd.id);

  const toggleFriend = (friend) => {
    const idx = findIfSelected(friend);
    if (idx > -1) {
      setSelectedFriends(prevState => {
        const newState = [...prevState]
        newState.splice(idx, 1);
        return newState;
      });
    } else {
      setSelectedFriends(prevState => [...prevState, friend]);
      setSearchText("");
    }
  }
```

## Upcoming Features
- Notifications for friend requests and unread messages.
- Timestamps for messages.
