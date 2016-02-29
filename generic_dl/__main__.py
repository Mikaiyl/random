#!/usr/bin/python2.7
import urllib as url
import bs4 
import argparse

def getPage(url):
    req = url.Request(arg)
    response = url.urlopen(req)
    page = response.read()
    page_bs = bs4.BeautifulSoup(page)
    return pag_bs

if __name__ == "__main__":

    parser = argparse.ArgumentParser(description='Find files with listed extensions in specified webpage.')
    parser.add_argument('-s','--site',dest='uri',required=True)
    parser.add_argument('-f','--format',dest='search_list')

    parser.parse_args()
    getPage(parser.uri)
