(defproject myfirst "0.1.0-SNAPSHOT"
  :description "myfirst"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293" :scope "provided"]]
  :plugins [[lein-cljsbuild "1.1.4"]]
  :clean-targets ^{:protect false} [:target-path :compile-path "resources/public/js"]
  :cljsbuild
  {:builds [{:source-paths ["src"]
             :compiler
             {:main "myfirst.core"
              :asset-path "js"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js"
              :source-map true
              :optimizations :none
              :pretty-print true}}]})