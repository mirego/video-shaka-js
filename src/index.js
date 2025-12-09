import * as nrvideo from "newrelic-video-core";
import Tracker from "./tracker";
import JasperAdsTracker from "./jasper-ads";

nrvideo.ShakaTracker = Tracker;
nrvideo.JasperAdsTracker = JasperAdsTracker;

module.exports = nrvideo;
