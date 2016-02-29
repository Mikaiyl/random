#!/usr/bin/python2.7
import urllib2 as url
import bs4 
import argparse
from lxml import etree

def getPage(arg):
    req = url.Request(arg)
    response = url.urlopen(req)
    page = response.read()
    return page

def getResponse(arg):
    req = url.Request(arg)
    response = url.urlopen(req)
    return response

def beautify(page_bs):
    page_bs = bs4.BeautifulSoup(page,"lxml")
    return page_bs

def parse():
    parser = argparse.ArgumentParser(description='Find files with listed extensions in specified webpage.')
    parser.add_argument('-s','--site',dest='uri',required=True)
    parser.add_argument('-f','--format',dest='search_list')
    return parser


if __name__ == "__main__":

    args = parse().parse_args()
    page = getPage(args.uri)
    print(page)
    
    print('-----------------------------------------BREAK-------------------------------------------------------')
    
    htmlparser = etree.HTMLParser()
    tree = etree.parse(getResponse(args.uri), htmlparser)
