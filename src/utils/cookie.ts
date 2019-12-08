const cookie: any = {
  get(name: string): any {
    var result = new RegExp(
      "(?:^|; )" + encodeURIComponent(name) + "=([^;]*)"
    ).exec(document.cookie);
    return result ? result[1] : null;
  },

  set(name: string, value: string, days?: number): void {
    if (!days) {
      days = 365 * 20;
    }

    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

    var expires = "; expires=" + date.toUTCString();

    document.cookie = name + "=" + value + expires + "; path=/";
  },

  del(name: string): void {
    const date = new Date();
    // Set it expire in -1 days
    date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);
    document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
  }
};

export default cookie;
