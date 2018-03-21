var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['photocell_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_PHOTOCELL_UPPER_LEFT, '0'],
        [Blockly.Msg.WEBDUINO_PHOTOCELL_UPPER_RIGHT, '3'],
      ]), 'pin_')
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL);
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/sensor/photocell.html' + utmUrl);
  }
};

Blockly.Blocks['photocell_detected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('photocell'), 'name_')
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_DETECTED);
    this.appendStatementInput('detected_')
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/sensor/photocell.html' + utmUrl);
  }
};

Blockly.Blocks['photocell_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('photocell'), 'name_')
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_VAL);
    this.setOutput(true);
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/sensor/photocell.html' + utmUrl);
  }
};

Blockly.Blocks['photocell_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('photocell'), 'name_')
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_STOP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/sensor/photocell.html' + utmUrl);
  }
};
