const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.channel.sendMessage('Ding Dong!');
        }
    if (message.content.toLowerCase() === 'tomo is gay') {
        message.channel.sendMessage('hes probably very gay');
        }
    if (message.content.toLowerCase() === 'i love seong') {
        message.channel.sendMessage("You're my favorite~");
        }
});

  /**
   * Starts a typing indicator in the channel.
   * @param {number} [count] The number of times startTyping should be considered to have been called
   * @example
   * // Start typing in a channel
   * channel.startTyping();
   */
  startTyping(count) {
    if (typeof count !== 'undefined' && count < 1) throw new RangeError('Count must be at least 1.');
    if (this.client.user._typing.has(this.id)) {
      const entry = this.client.user._typing.get(this.id);
      entry.count = count || entry.count + 1;
    }

    const entry = {
      count: count || 1,
      interval: this.client.setInterval(() => {
        this.client.rest.methods.sendTyping(this.id).catch(() => {
          this.client.clearInterval(entry.interval);
          this.client.user._typing.delete(this.id);
        });
      }, 9000),
    };
    this.client.rest.methods.sendTyping(this.id).catch(() => {
      this.client.clearInterval(entry.interval);
      this.client.user._typing.delete(this.id);
    });
    this.client.user._typing.set(this.id, entry);
  }

  /**
   * Stops the typing indicator in the channel.
   * The indicator will only stop if this is called as many times as startTyping().
   * <info>It can take a few seconds for the client user to stop typing.</info>
   * @param {boolean} [force=false] Whether or not to reset the call count and force the indicator to stop
   * @example
   * // Reduce the typing count by one and stop typing if it reached 0
   * channel.stopTyping();
   * @example
   * // Force typing to fully stop in a channel
   * channel.stopTyping(true);
   */
  stopTyping(force = false) {
    if (this.client.user._typing.has(this.id)) {
      const entry = this.client.user._typing.get(this.id);
      entry.count--;
      if (entry.count <= 0 || force) {
        this.client.clearInterval(entry.interval);
        this.client.user._typing.delete(this.id);
      }
    }
  }

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
